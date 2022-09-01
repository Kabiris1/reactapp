import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const CapFClick = () => {
    let CapitalizeWords = text[0].toUpperCase();
    for (let i = 1; i <= text.length - 1; i++) {
      let currentCharacter,
        previousCharacter = text[i - 1];
      if (previousCharacter && previousCharacter === " ") {
        currentCharacter = text[i].toUpperCase();
      } else {
        currentCharacter = text[i];
      }
      CapitalizeWords = CapitalizeWords + currentCharacter;
    }
    setText(CapitalizeWords);
  };
  function speaktext() {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 12;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <label htmlFor="mybox" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="mybox"
          rows="8"
        ></textarea>

        <button className="btn btn-primary my-3 " onClick={handleUpClick}>
          for upperCase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>
          for lowerCase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={speaktext}>
          listen
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={CapFClick}>
          capital it
        </button>
        <button
          className="btn btn-primary my-3 mx-1"
          onClick={handleClearClick}
        >
          {" "}
          Clear
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Enter your text in box to preview"}</p>
      </div>
    </>
  );
}

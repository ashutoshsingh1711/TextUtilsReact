import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); //this is used to update the state
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText); //this is used to update the state
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value); //this is used to add more text in text
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra", "success");
  };
  const [text, setText] = useState("");
  // text= "new text" //wrong way to change the state
  // setText("new text"); //correct way

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Space{" "}
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}

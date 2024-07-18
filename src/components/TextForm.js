import React from "react";
import PropTypes from "prop-types";

export function TextForm(props) {
  const [text, setText] = React.useState("");

  React.useEffect(() => {}, [props?.mode]);

  const handleClickUpper = () => {
    setText(text.toUpperCase());
    props?.showAlert("Converted to Uppercase", "success");
  };

  const handleClickLower = () => {
    setText(text.toLowerCase());
    props?.showAlert("Converted to Lowercase", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleClearText = () => {
    setText("");
    props?.showAlert("Cleared", "success");
  };

  const handleCopy = () => {
    const textBox = document.getElementById("myBox");
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
    props?.showAlert("Copied to Clipboard!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    const newText = document.getElementById("myBox").value.replace(/\s+/g, " ");
    setText(newText);
    props?.showAlert("Removed extra spaces", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props?.mode ? "#042743" : "white",
          color: props?.mode ? "white" : "black",
        }}
      >
        <div
          className="mb-3"
          style={{
            backgroundColor: props?.mode ? "#042743" : "white",
            color: props?.mode ? "white" : "black",
          }}
        >
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props?.mode ? "#042743" : "white",
              color: props?.mode ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handleClickUpper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary me-3" onClick={handleClickLower}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary me-3" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary me-3" onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn btn-primary me-3"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: props?.mode ? "#042743" : "white",
          color: props?.mode ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p className="my-3">
          {" "}
          {text === "" ? 0 : text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lowerCase = word.toLowerCase();
    console.log(lowerCase.charAt(0) + lowerCase.slice(1));
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  };

  return (
    <div>
      <div
        className={`alert alert-${props?.alert?.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props?.alert?.type)}</strong> : {props?.alert?.msg}
      </div>
    </div>
  );
}

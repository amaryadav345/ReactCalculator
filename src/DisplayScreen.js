import React from "react";
import "./DisplayScreen.css";

const DisplayScreen = (props) => {
  return (
    <input
      className="display"
      type="text"
      //   placeholder="Enter no"
      value={props.value}
      readOnly
    />
  );
};

export default DisplayScreen;

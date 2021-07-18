import React from "react";

import "./NewButton.css";

export default class NewButton extends React.Component {
  handelClick = (e) => {
    if (this.props.id === "clear") {
      this.props.parentCallback("C");
    } else {
      this.props.parentCallback(this.props.buttonVal);
    }
  };

  render() {
    return (
      <button
        name="{this.props.buttonVal}"
        className="button"
        onClick={this.handelClick}
      >
        {this.props.buttonVal}
      </button>
    );
  }
}

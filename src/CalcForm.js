import React from "react";
import "./CalcForm.css";

import NewButton from "./NewButton";
import DisplayScreen from "./DisplayScreen";

export default class CalcForm extends React.Component {
  constructor(props) {
    super(props);
    this.handelCallback = this.handelCallback.bind(this);
    this.state = {
      keyInput: 0,
      result: "",
    };
  }

  handelCallback = (keypadVal) => {
    if (keypadVal === "C") {
      this.setState({ result: "" });
    } else {
      if (keypadVal === "=") {
        try {
          this.setState({ result: eval(this.state.result) });
        } catch (err) {
          this.setState({ result: "error" });
        }
      } else {
        this.setState({ keyInput: keypadVal });
        this.setState({ result: this.state.result + keypadVal });
      }
    }
  };

  calcOperation = () => {
    console.log("Equal Operation");
  };

  render() {
    return (
      <div className="card">
        <div className="inner-card">
          <h1>Calculator</h1>

          <div className="button-form">
            <DisplayScreen value={this.state.result} />
            <NewButton
              buttonVal="="
              className="math_opration"
              parentCallback={this.handelCallback}
            />
            <br />

            <NewButton buttonVal="7" parentCallback={this.handelCallback} />
            <NewButton buttonVal="8" parentCallback={this.handelCallback} />
            <NewButton buttonVal="9" parentCallback={this.handelCallback} />
            <NewButton buttonVal="/" parentCallback={this.handelCallback} />
            <br />
            <NewButton buttonVal="4" parentCallback={this.handelCallback} />
            <NewButton buttonVal="5" parentCallback={this.handelCallback} />
            <NewButton buttonVal="6" parentCallback={this.handelCallback} />
            <NewButton buttonVal="*" parentCallback={this.handelCallback} />
            <br />
            <NewButton buttonVal="1" parentCallback={this.handelCallback} />
            <NewButton buttonVal="2" parentCallback={this.handelCallback} />
            <NewButton buttonVal="3" parentCallback={this.handelCallback} />
            <NewButton buttonVal="-" parentCallback={this.handelCallback} />
            <br />
            <NewButton
              buttonVal="Clear"
              id="clear"
              parentCallback={this.handelCallback}
            />
            <NewButton buttonVal="0" parentCallback={this.handelCallback} />
            <NewButton buttonVal="." parentCallback={this.handelCallback} />
            <NewButton buttonVal="+" parentCallback={this.handelCallback} />
          </div>
        </div>
      </div>
    );
  }
}

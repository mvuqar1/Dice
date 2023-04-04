import React, { Component } from "react";
import Dice from "./components/Dice";
import "./styles.css";

export default class App extends Component {
  componentDidMount() {
    window.addEventListener("click", this.spaceBarPressed);
  }
  spaceBarPressed = (e) => {
    if (e.target.tagName.toLowerCase() === "html") {
      this.refs.child.shuffleDices();
    }
  };
  render() {
    return (
      <div className="App">
        <div className="dices">
          <Dice key="1" />
        </div>
      </div>
    );
  }
}

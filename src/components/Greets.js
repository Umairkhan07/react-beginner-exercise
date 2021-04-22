import React, { Component } from "react";

export default class Greets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment() {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => console.log("Increment")
    );
  }
  decermnt() {
    this.setState(
      {
        counter: this.state.counter - 1,
      },
      () => console.log("Decreament")
    );
  }
  reset() {
    this.setState(
      {
        counter: 0,
      },
      () => console.log("Value of the counter is reset")
    );
  }
  render() {
    return (
      <div>
        <p>Current counter value {this.state.counter}</p>
        <button onClick={() => this.increment()}>ADD</button>
        <button onClick={() => this.decermnt()}>SUB</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

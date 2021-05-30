import React, { Component } from "react";

class Counter extends Component {
  state = {
    order: 4,
  };
  handleCounterChange = (newV) => {
    this.props.CounterChange(newV);
  };
  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };
  handleMinus = () => {
    this.setState(
      {
        order: this.state.order > 0 ? this.state.order - 1 : 0,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.handleMinus}>-</button>
        <h4 style={{ display: "inline-block", padding: "0px 10px" }}>
          {this.state.order}
        </h4>
        <button onClick={this.handlePlus}>+</button>
      </div>
    );
  }
}

export default Counter;

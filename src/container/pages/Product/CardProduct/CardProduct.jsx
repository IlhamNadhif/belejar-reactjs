import React, { Component } from "react";
import Counter from "./Counter";

class CardProduct extends Component {
  render() {
    return (
      <div>
        <h5>Counter</h5>
        <Counter CounterChange={(value)=>this.props.onCounterChange(value)} />
      </div>
    );
  }
}

export default CardProduct;

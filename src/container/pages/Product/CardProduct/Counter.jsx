import React, { Component } from "react";
import { GlobalConsumer } from "../../../../context/context";
import { rootContext } from "../../../Home/Home";

class Counter extends Component {
  // state = {
  //   order: 4,
  // };
  /* handleCounterChange = (newV) => {
    this.props.CounterChange(newV);
  }; */
  /* handlePlus = () => {
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
  }; */
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}>
          -
        </button>
        <h4 style={{ display: "inline-block", padding: "0px 10px" }}>
          {this.props.state.totalOrder}
        </h4>
        <button onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}>
          +
        </button>
      </div>
    );
  }
}

/* const mapStateToProps = (state) => {
  return {
    orders: state.totalOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePluss: () => dispatch({ type: ActionType.PLUS_ORDER }),
    handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
  };
}; */

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);

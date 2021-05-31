import React, { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../../../redux/reducer/globalActionType";

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
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.handleMinus}>-</button>
        <h4 style={{ display: "inline-block", padding: "0px 10px" }}>
          {this.props.orders}
        </h4>
        <button onClick={this.props.handlePluss}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.totalOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePluss: () => dispatch({ type: ActionType.PLUS_ORDER }),
    handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

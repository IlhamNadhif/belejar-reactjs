import React, { Component, Fragment, Fragmenta } from "react";
import CardProduct from "./CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 4,
  };
  handleCounter = (newValue) => {
    this.setState({
      order: newValue,
    });
  };
  render() {
    return (
      <Fragment>
        <p>Halaman Product</p>
        <hr />
        <h1>{this.state.order}</h1>
        <CardProduct onCounterChange={(value) => this.handleCounter(value)} />
      </Fragment>
    );
  }
}

export default Product;

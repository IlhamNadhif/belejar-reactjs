import React, { Component, Fragment, Fragmenta } from "react";
import { connect } from "react-redux";
import CardProduct from "./CardProduct/CardProduct";

class Product extends Component {
  /* state = {
    order: 4,
  };
  handleCounter = (newValue) => {
    this.setState({
      order: newValue,
    });
  }; */
  render() {
    return (
      <Fragment>
        <p>Halaman Product</p>
        <hr />
        <h1>{this.props.order}</h1>
        <CardProduct />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapStateToProps)(Product);

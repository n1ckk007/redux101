//import connect and create a mapstatetoprops and we can grab anything we want out of the store
import React, { Component } from "react";
import { connect } from "react-redux";
import clearInventory from "../actions/clearInventory";
import { bindActionCreators } from "redux";

class Main extends Component {
  //this function will be neccessary if you want to add in more logic eg modal box
  //   clearInventoryAction = () => {
  //     this.props.clearInventory();
  //   };

  render() {
    // console.log(this.props.frozenData);
    //reduce is v similar to map except instead of building a new array we're going to reduce this array down into a single value
    const frozenQuantity = this.props.frozenData.reduce(
      (accum, frozenItem) => accum + frozenItem.quantity,
      0
    );
    const meatQuantity = this.props.meatData.reduce(
      (accum, meatItem) => accum + meatItem.quantity,
      0
    );
    const produceQuantity = this.props.produceData.reduce(
      (accum, produceItem) => accum + produceItem.quantity,
      0
    );

    return (
      <div>
        <h2>FrozenDept: {frozenQuantity} </h2>
        <h2>MeatDept: {meatQuantity} </h2>
        <h2>ProduceDept: {produceQuantity} </h2>
        <button onClick={this.props.clearInventory}>Clear all Inventory</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // we get each piece of state out of here that we want from the root reducer
    frozenData: state.frozen,
    meatData: state.meat,
    produceData: state.produce,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clearInventory: clearInventory,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

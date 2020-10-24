import React, { Component } from "react";

// we want this component to know about redux
// to do that we need some help... or some glue
// the glue is react-redux! We need the connect function
// we needed provider up top (in index.js) but at the component level we need react!
import { connect } from "react-redux";
import updateMeat from "../actions/meatInvUpdate";
import { bindActionCreators } from "redux";

// if a component needs to know about redux, we NEED to use connect everytime

class MeatDept extends Component {
  increment = (qChange, index) => {
    // console.log(operation, index);
    this.props.updateMeat(qChange, index);
  };

  render() {
    //console.log(this.props.frozenData);
    //console.log(this.props.meatData);

    const meatInventory = this.props.meatData.map((item, i) => {
      return (
        <div key={i}>
          <li>
            {item.food}: {item.quantity}
          </li>
          {/* because we need to pass some data up, it needs to be rocket function */}
          <input
            type="button"
            onClick={() => {
              this.increment(1, i);
            }}
            value="+"
          />
          <input
            type="button"
            onClick={() => {
              this.increment(-1, i);
            }}
            value="-"
          />
        </div>
      );
    });
    return (
      <div>
        <h1>MeatDept</h1>
        <ul>{meatInventory}</ul>
      </div>
    );
  }
}

// console.log(connect);
// mapStateToProps takes 1 arg, "state" and that is the rootReducer/Store
function mapStateToProps(state) {
  // mapStateToProps returns an object, with:
  // property is the local prop name to this component
  // the value will be the property in the root reducer... ie, a piece of the store
  return {
    meatData: state.meat, //must be state.frozen as rootReducer produces frozen property.
    // frozenData: state.frozen,
  };
}

function mapDispatchToProps(dispatch) {
  //  this function returns, bindActionCreators and we hand it an object:
  // each property will be a local prop,
  // each value will be a function that is dispatch when run
  // 2nd arg for bAC is the dispatch
  return bindActionCreators(
    {
      updateMeat: updateMeat,
    },
    dispatch
  );
}

// this is how we connect our redux store and our component
// connect usually takes 2 args, the first one is a function that is going to map
// a piece of redux state to this components props
export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);

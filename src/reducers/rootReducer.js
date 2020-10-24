//also seen as index.js
//this is the root reducer. It is the store manager for all the reducers
//to make a root reducer:
// 1. We need to get a method from redux, called combineReducers
import { combineReducers } from "redux";

// 2. Get each individual reducer
import frozenReducer from "./frozenReducer";
import produceReducer from "./produceReducer";
import meatReducer from "./meatReducer";

// 3. Call combineReducers and hand it an object
//each key in combineReducers will be a piece of state in the redux store
//each value will be a reducer, and that reducer will return a piece of state in the redux store
const rootreducer = combineReducers({
  //in our redux store, we will have a little piece of state called frozen
  //the value of frozen will be whatever this function returns
  frozen: frozenReducer,
  produce: produceReducer,
  meat: meatReducer,
});

export default rootreducer;

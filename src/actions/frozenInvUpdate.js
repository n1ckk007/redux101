// this file is an action creator
// action creators return actions
// action is an object that has at LEAST a property of type
// this action creator is going to be handed to the DISPATCH

export default (operation, index) => {
  console.log(operation, index);

  return {
    type: "updateFrozen",
    // payload just contains data/ stuff that comes along w this particular type
    payload: {
      operation,
      index,
    },
  };
};

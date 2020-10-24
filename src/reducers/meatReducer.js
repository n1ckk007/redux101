//lower case cos its not a component
//a reducer is just a function
//All reducers have 2 params:
// 1. Current state, usually provide a default state
// 2. Info that came from any action

const seedData = [
  { food: "Chicken", quantity: 17 },
  { food: "Bacon", quantity: 14 },
  { food: "Scoth Fillet", quantity: 20 },
];
export default (state = seedData, action) => {
  console.log("Meat Reducer is running");
  console.log(action);
  if (action.type === "updateMeat") {
    console.log("I care about this action!!");
    // we make a copy of state cos we never mutate state
    let newState = [...state];
    const payload = action.payload;
    newState[payload.index].quantity += payload.qChange;
    return newState;
  } else if (action.type === "clearInventory") {
    let newState = [...state];
    newState.forEach((item, i) => {
      item.quantity = 0;
    });
    return newState;
  } else {
    return state;
  }
};

// everytime you add a new reducer, you have to import it to the rootReducer

//lower case cos its not a component
//a reducer is just a function
//All reducers have 2 params:
// 1. Current state, usually provide a default state
// 2. Info that came from any action

const seedData = [
  {
    food: "TV dinners",
    quantity: 10,
  },
  { food: "Frozen veggies", quantity: 21 },
  { food: "Frozen pizzas", quantity: 25 },
];
export default (state = seedData, action) => {
  console.log("Frozen Reducer is running");
  console.log(action);
  if (action.type === "updateFrozen") {
    console.log("I care about this action!!");
    // we make a copy of state cos we never mutate state
    let newState = [...state];
    if (action.payload.operation === "+") {
      newState[action.payload.index].quantity++;
    } else if (action.payload.operation === "-") {
      newState[action.payload.index].quantity--;
    }
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

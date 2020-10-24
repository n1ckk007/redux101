export default (operation, index) => {
  console.log("Updating produce inventory!!");

  return {
    type: "updateProduce",
    payload: {
      operation,
      index,
    },
  };
};

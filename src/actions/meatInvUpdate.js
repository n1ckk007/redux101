export default (qChange, index) => {
  console.log(qChange, index);
  return {
    type: "updateMeat",
    payload: {
      qChange,
      index,
    },
  };
};

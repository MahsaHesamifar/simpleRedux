const initialState = {
  number: 10,
};
const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_NUMBER":
      return { ...state, number: state.number + 1 }; //creates a new obj so we need the ...state part
    case "DECREASE_NUMBER":
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};
export default numberReducer;

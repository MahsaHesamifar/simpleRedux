const initialState = {
  counter: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return { ...state, counter: state.counter + action.payload }; //creates a new obj so we need the ...state part
    case "DECREASE_COUNTER":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
export default counterReducer;

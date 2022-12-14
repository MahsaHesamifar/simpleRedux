import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import numberReducer from "./number/numberReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  counterState: counterReducer,
  numberState: numberReducer,
  usersState: usersReducer,
});
export default rootReducer;

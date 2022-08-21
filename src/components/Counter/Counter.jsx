// -----  code with using react-redux hooks --------------------------------
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "../../redux/counter/counterAction";

const Counter = () => {
  const [value, setValue] = useState(1);
  // const state = useSelector((state) => state);
  const counter = useSelector((state) => state.counterState.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter - {counter}</h1>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(increaseCounter(+value))}>
        increase
      </button>
      <button onClick={() => dispatch(decreaseCounter(+value))}>
        decrease
      </button>
    </div>
  );
};

export default Counter;

// ----- sample of code without using react-redux hooks -------------------------
// import React from "react";
// import { increase } from "../../redux/counter/counterAction";
// import { connect } from "react-redux";

// const Counter = (props) => {
//   return (
//     <div>
//       <h1>counter - {props.counter}</h1>
//       <button onClick={props.increase}>increase</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase: () => dispatch(increase()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

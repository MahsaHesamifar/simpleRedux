import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseNumber,
  decreaseNumber,
} from "../../redux/number/numberAction";

const Number = () => {
  const number = useSelector((state) => state.numberState.number);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>number - {number}</h1>
      <button onClick={() => dispatch(increaseNumber())}>increase</button>
      <button onClick={() => dispatch(decreaseNumber())}>decrease</button>
    </div>
  );
};

export default Number;

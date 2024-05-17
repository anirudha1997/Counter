"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import { useSelector, selectCount, useDispatch } from "@/lib/redux";
import {
  decrement, increment, incrementByAmount
} from "./../../../lib/redux/slices/counterSlice";
import { incrementIfOddAsync } from "./../../../lib/redux/slices/counterSlice/thunks";
import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  // Create a state named incrementAmount
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            // dispatch event to decrease count by 1
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            // dispatch event to increment count by 1
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} aria-label="Set increment amount" onChange={(event) => {
          setIncrementAmount(Number(event.target.value));
        }}/>
        <button
          className={styles.button}
          onClick={() => {
            // dispatch event to add incrementAmount to count
            dispatch(incrementByAmount(incrementAmount))
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            // Dispatch the incrementIfOddAsync thunk when "Add If Odd" button is clicked
            dispatch(incrementIfOddAsync(incrementAmount));
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};

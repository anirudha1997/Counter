/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    increment: (state) => {
      state.value += 1; 
    },
    // decrement
    decrement: (state) => {
      state.value -= 1; 
    },
  },
});

export const {increment,decrement} = counterSlice.actions

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}

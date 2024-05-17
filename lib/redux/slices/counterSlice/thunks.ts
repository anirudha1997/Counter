/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import { selectCount, incrementByAmount } from "@/lib/redux/slices/counterSlice";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
    (dispatch, getState) => {
    const currentValue = selectCount(getState()); // Get the current count from the Redux state
      if (currentValue % 2 !== 0) { // update only if currentValue is odd
      dispatch(incrementByAmount(amount)); // If odd, dispatch the incrementByAmount action with the provided amount
  }
  };

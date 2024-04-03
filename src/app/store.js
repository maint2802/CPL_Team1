import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counter/couterslice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

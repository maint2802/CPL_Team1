import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isLogin: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    toggleIsLogin: (state) => {
      state.isLogin = !state.isLogin;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, toggleIsLogin } =
  counterSlice.actions;

export default counterSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from "../features/counter";
// counterReducer
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

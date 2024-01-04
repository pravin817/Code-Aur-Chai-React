import { configureStore } from "@reduxjs/toolkit";

// now provide the reducers to the store

import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import commentSliceReducer from "./commentSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    comments: commentSliceReducer,
  },
});

export default store;

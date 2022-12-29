import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setTodos(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

// Exporting actions
export const { setTodos, setStatus } = todoSlice.actions;

// Exporting Reducers
export default todoSlice.reducer;

// Thunk middleware to fetch async data
// These middlewares are also actions
export function fetchTodos() {
  return async function fetchTodoThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`${import.meta.env.VITE_API}/todos`);
      const data = await res.json();
      dispatch(setTodos(data));

      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function deleteTodo(id) {
  return async function deleteTodoThunk(dispatch, getState) {
    console.log(id);
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API}/todos/${id}`);
      const data = await res.data;
      // If deleted successfully
      if (data.deletedCount) {
        // Refetch data
        dispatch(fetchTodos());
      }
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

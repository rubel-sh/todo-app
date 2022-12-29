import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "./todoSlice";

const commentSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setComments(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

// Exporting actions
export const { setComments, setStatus } = commentSlice.actions;

// Exporting Reducers
export default commentSlice.reducer;

// Thunk middleware to fetch async data
// These middlewares are also actions
export function fetchComments() {
  return async function fetchCommentsThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`${import.meta.env.VITE_API}/comments`);
      const data = await res.json();
      dispatch(setComments(data));

      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// Post comment
export function postComment(todoId, comment) {
  console.log(todoId, comment);
  return async function postCommentThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/comments/${todoId}`,
        comment
      );
      const result = res.data;

      dispatch(fetchComments());
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

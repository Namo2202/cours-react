import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("getPosts", async (_, thunkAPI) =>
  axios.get("http://localhost:5000/post/").then((res) => {
    thunkAPI.dispatch(getPostsSuccess(res.data));
  })
);

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postsData: [],
  },
  reducers: {
    getPostsSuccess: (state, { payload }) => {
      state.postsData = payload;
    },
    createPost: (state, { payload }) => {
      state.postsData.push(payload);
    },
  },
});

export const { getPostsSuccess, createPost } = postSlice.actions;
export default postSlice.reducer;

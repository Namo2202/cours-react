import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postsData: [],
  },
  reducers: {
    getPosts: (state, { payload }) => {
      state.postsData = payload;
    },
  },
});

export const { getPosts } = postSlice.actions;
export default postSlice.reducer;

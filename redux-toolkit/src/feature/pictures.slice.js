import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    //1ère méthode
    // setPicturesData: (state, action) => {
    //   state.picture = action.payload;
    // },

    //2è méthode avec destructuration de action
    setPicturesData: (state, { payload }) => {
      state.pictures = payload;
    },
  },
});

export const { setPicturesData } = picturesSlice.actions;
export default picturesSlice.reducer;

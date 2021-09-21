import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryData: [],
};

export const adminReducer = createSlice({
  name: "accountmanagementdata",
  initialState,
  reducers: {
    setCategoryData: (state, action) => {
      state.categoryData = action.payload;
    },
  },
});

export const { setCategoryData } = adminReducer.actions;
export default adminReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: !!localStorage.getItem("token"),
  categoryData: [],
};

export const adminReducer = createSlice({
  name: "accountmanagementdata",
  initialState,
  reducers: {
    userLoginSuccess: (state) => {
      state.loggedIn = true
    },
    userLogoutSuccess: (state) => {
      state.loggedIn = false
    },
    setCategoryData: (state, action) => {
      state.categoryData = action.payload;
    },
  },
});

export const { userLoginSuccess, userLogoutSuccess, setCategoryData } = adminReducer.actions;
export default adminReducer.reducer;

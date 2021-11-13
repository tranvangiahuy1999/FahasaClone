import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: !!localStorage.getItem("token"),
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
    }
  },
});

export const { userLoginSuccess, userLogoutSuccess } = adminReducer.actions;
export default adminReducer.reducer;

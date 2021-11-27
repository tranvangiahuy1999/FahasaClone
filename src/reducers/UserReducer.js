import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: !!localStorage.getItem("token"),
  categoryData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userloginsuccess: (state) => {
      state.loggedIn = true;
    },
    userlogoutsuccess: (state) => {
      state.loggedIn = false;
    },
    setcategorydata: (state, action) => {
      state.categoryData = action.payload;
    },
  },
});

export const { userloginsuccess, userlogoutsuccess, setcategorydata } =
  userSlice.actions;
export default userSlice.reducer;

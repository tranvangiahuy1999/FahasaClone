import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxtagData: [],
};

export const boxtagReducer = createSlice({
  name: "boxtag",
  initialState,
  reducers: {
    setBoxtagData: (state, action) => {
      state.boxtagData.push(action.payload)
    },
  },
});

export const { setBoxtagData } =
boxtagReducer.actions;
export default boxtagReducer.reducer;

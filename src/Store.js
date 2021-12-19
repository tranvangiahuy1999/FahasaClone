import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import userSlice from "./reducers/UserReducer";
import boxtagReducer from "./reducers/BoxtagReducer";

const reducers = combineReducers({  
  shop: userSlice,
  boxtag: boxtagReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

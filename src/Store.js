import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import userSlice from "./reducers/UserReducer";
import boxtagReducer from "./reducers/BoxtagReducer";

const reducers = combineReducers({  
  shop: userSlice,
  boxtag: boxtagReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

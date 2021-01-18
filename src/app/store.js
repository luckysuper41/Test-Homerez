import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './dataSlice';

// root
const rootReducer = {
  data: dataSlice,
}

// store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
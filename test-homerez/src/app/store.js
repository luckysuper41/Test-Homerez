import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './dataSlice';

const rootReducer = {
  data: dataReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../features/rickandmorty/apiSlice";

export default configureStore({
  reducer: {
    api: apiReducer,
  },
});

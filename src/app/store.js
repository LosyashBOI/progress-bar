import { configureStore } from "@reduxjs/toolkit";
import progressBarReducer from "../features/progress-bar/progressBarSlice";

export const store = configureStore({
  reducer: {
    progressBar: progressBarReducer,
  },
});

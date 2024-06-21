import { configureStore } from "@reduxjs/toolkit";
import { destinationReducer } from "./destination.slice";

export const store = configureStore({
  reducer: {
    destination: destinationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

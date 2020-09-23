import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import sampleSlice from "./sample/sampleSlice";

export const rootReducer = combineReducers({
  sample: sampleSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});
export type RootState = ReturnType<typeof rootReducer>;
export default store;

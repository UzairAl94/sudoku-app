import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../rootReducer";

const devTools = process.env.NODE_ENV !== "production";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  devTools,
});

store.subscribe(() => {
  // This fires when ever we update anything in store
});

export default store;

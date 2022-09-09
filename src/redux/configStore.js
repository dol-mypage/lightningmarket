import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./modules/PostSlice";
import loginSlice from "./modules/loginSlice";

const store = configureStore({
  reducer: {
    postSlice: postSlice.reducer,
    loginSlice: loginSlice.reducer,
  },
});

export default store;

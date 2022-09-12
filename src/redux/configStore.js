import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./modules/PostSlice";
// import userSlice from "./modules/userSlice";

const store = configureStore({
  reducer: {
    postSlice: postSlice.reducer,
    // userSlice: loginSlice.reducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./modules/PostSlice";
// import userSlice from "./modules/userSlice";
import productSlice from "./modules/products";
import userSlice from "./modules/userSlice";

const store = configureStore({
  reducer: {
    postSlice: postSlice.reducer,
    // userSlice: loginSlice.reducer,
    product: productSlice.reducer,
    userSlice: userSlice.reducer,
  },
});

export default store;

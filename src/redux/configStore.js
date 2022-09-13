import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./modules/PostSlice";
// import userSlice from "./modules/userSlice";
import productSlice from "./modules/products";

const store = configureStore({
  reducer: {
    postSlice: postSlice.reducer,
    // userSlice: loginSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;

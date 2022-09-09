import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./modules/PostSlice";

const store = configureStore({
    reducer:{
        postSlice:postSlice.reducer
    }
})


export default store;
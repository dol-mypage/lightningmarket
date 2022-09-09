import { configureStore, createSlice } from "@reduxjs/toolkit";
let login = createSlice({
  name: "login",
  initialState: "kim",
});

export default configureStore({
  reducer: {
    login: login,
  },
});

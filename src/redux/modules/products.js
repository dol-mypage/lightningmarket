import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  success: false,
};

export const __getProduct = createAsyncThunk(
  "/products",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const data = await axios.get("http://13.125.225.96:8080/products", {
        // headers: {
        //   Authorization: localStorage.getItem("Authorization"),
        //   RefreshToken: localStorage.getItem("RefreshToken"),
        // },
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},

  extraReducers: {
    [__getProduct.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__getProduct.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.data = action.payload; // Store에 있는 data에 서버에서 가져온 data를 넣음
    },
    [__getProduct.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣음
    },
  },
});

export default productSlice;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const initialState = {
//   user: [],
//   isLoading: false,
//   error: null,
// };

// export const signUp = createAsyncThunk(
//   "userSlice/signup",
//   async (data, { rejectWithValue }) => {
//     console.log(data);
//     if (data.password !== data.passwordConfirm) {
//       return alert("비밀번호가 일치하지 않습니다");
//     } else {
//       try {
//         console.log("미들웨어실행", data);

//         const res = await axios.post("http://13.125.225.96:8080/signup", data);
//         console.log(res);
//         if (data.data.success === false) alert(data.data.error.message);
//         else {
//           alert("회원가입이 완료되었습니다.");
//         }
//       } catch (err) {
//         alert("가입에 실패했습니다");
//       }
//     }
//   }
// );

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  success: false,
};

export const signup = createAsyncThunk(
  "data/signup",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const data = await axios.post(
        "http://13.125.225.96:8080/signup",
        payload
      );
      console.log(data);
      if (data.data.success === false) alert(data.data.error.message);
      else alert("사용 가능한 아이디입니다.");
      if (data.data.success === false) alert(data.data.error.message);
      else alert("회원가입이 완료되었습니다.");
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // return thunkAPI.rejectWithValue(error);
    }
  }
);

export const _logout = createAsyncThunk(
  "users/logout",
  async (payload, thunkAPI) => {
      try{

          const data = await axios.post("http://13.125.225.96:8080/logout",payload,{

              headers:{
                Authorization: localStorage.getItem("Authorization"),
                RefreshToken: localStorage.getItem("RefreshToken"),
              }
          })
          localStorage.removeItem("Authorization")
          localStorage.removeItem("RefreshToken")
          localStorage.removeItem("nickname")
          return thunkAPI.fulfillWithValue(data.data)
      }catch(error){
          return thunkAPI.rejectWithValue(error);
      }
  }
)
// export const login = createAsyncThunk(
//   "userSlice/login",
//   async (data, { rejectWithValue }) => {
//     console.log(data);
//     try {
//       console.log("미들웨어실행", data);
//       const res = await axios.post("http://13.125.225.96:8080/login", data);
//       console.log(res);
//     } catch (err) {}
//   }
// );

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: { logout(state,action) {
    localStorage.removeItem("Authorization")
    localStorage.removeItem("RefreshToken")
    localStorage.removeItem("nickname")
    localStorage.clear()
    console.log("작동")
}},
  extraReducers: {},
});

export const {logout} = userSlice.actions;
export default userSlice

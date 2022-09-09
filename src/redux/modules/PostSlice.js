import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import axios from "axios";

const initialState = {
    post: [],
    isLoading: false,
    error: null,
}


export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:() => {

    }
})


export const {} = postSlice.actions;
export default postSlice
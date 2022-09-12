import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import axios from "axios";

const initialState = {
    post: [],
    isLoading: false,
    error: null,
}

export const _deletePost = createAsyncThunk(
    "post/delete",
    async (payload, thunkAPI) => {
        try{
            const data = await axios.delete(
                `url+products/${payload.id}`,
                {
                    headers:{}
                }
            )
            return thunkAPI.fulfillWithValue(data.data);
        }catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const _updatePost = createAsyncThunk(
    "post/update",
    async (payload,thunkAPI) => {
        try{
            const data = await axios.put(
                `url+products/${payload.id}`,
            payload.data,{
                headers:{
                    "Content-Type": "multipart/form",
                }
            }
            )
            return thunkAPI.fulfillWithValue(data.data)
        }catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        // builder
        //     .addCase(_deletePost.pending, (state) => {
        //         state.isLoading = true;
        //     })
        //     .addCase(_deletePost.fulfilled, (state,action) => {
        //         state.isLoading = false;
        //         const deleteState = state.post.findIndex(post => post.id === action.payload)
        //         state.post.slice(deleteState,1)
        //     })
        //     .addCase(_deletePost.pending, (state,action) => {
        //         state.isLoading = true;
        //         state.error = action.payload;
        //     })
        // builder
        //     .addCase(_updatePost.pending, (state) => {
        //         state.isLoading = true;
        //     })
        //     .addCase(_updatePost.pending, (state,action) => {
        //         state.isLoading = true;
        //         state.post = action.payload;
        //     })
        //     .addCase(_updatePost.pending, (state,action) => {
        //         state.isLoading = true;
        //         state.error = action.payload;
        //     })
    }
})


export const {} = postSlice.actions;
export default postSlice
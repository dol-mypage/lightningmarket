import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {

    post: [],
    detail:{},
    search:[],
    isLoading: false,
    error: null,
}

export const _getDetails = createAsyncThunk(
  "PostSlice/getDetails",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://13.125.225.96:8080/products/${payload}`,
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
            RefreshToken: localStorage.getItem("RefreshToken"),
          },
        }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const _deletePost = createAsyncThunk(
  "PostSlice/delete",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `http://13.125.225.96:8080/auth/products/${payload.id}`,
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
            RefreshToken: localStorage.getItem("RefreshToken"),
          },
        }
      );
      window.location.replace("/");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const _updatePost = createAsyncThunk(
  "PostSlice/update",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.put(
        `http://13.125.225.96:8080/auth/products/${payload.id}`,
        payload.data,
        {
          headers: {
            "Content-Type": "multipart/form",
            Authorization: localStorage.getItem("Authorization"),
            RefreshToken: localStorage.getItem("RefreshToken"),
          },
        }
      );
      window.location.replace(`/products/${payload.id}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const onLikePost = createAsyncThunk(
  "like/onLikePost",
  async (payload, thunkApI) => {
    console.log(payload);
    try {
      const data = await axios.post(
        `http://13.125.225.96:8080/products/likes/${payload}`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
            RefreshToken: localStorage.getItem("RefreshToken"),
          },
        } //post는 두번째 인자가 데이터가 들어가야해서 {}를 넣어줌 데이터가 없으면 headers를 데이터로 인식
      );
      window.location.reload()
      return payload;
    } catch (error) {
      return thunkApI.rejectWithValue(error);
    }
  }
);
export const _searchPost = createAsyncThunk(

    "postSlice/searchPost",
    async (payload, thunkAPI) => {
        console.log(payload)
        try{
            const data = await axios.get(
                `http://13.125.225.96:8080/products/search/${payload}`,
            {
                headers:{}
            }
            )
            console.log(data)
             
        return thunkAPI.fulfillWithValue(data.data.data);
        }catch(error){
        return thunkAPI.rejectWithValue(error);

        }

  }
);

export const postSlice = createSlice({

    name:"post",
    initialState,
    reducers:{ likePost(state, action){
                let index = state.post.findIndex(post => post.id === action.payload.id);
                state.post[index].likes +=1;
                console.log("작동")
            }},
extraReducers:(builder) => {
        builder
            .addCase(_getDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(_getDetails.fulfilled, (state,action) => {
                state.isLoading = false;
                state.detail = action.payload;
                console.log(state.detail)
            })
            .addCase(_getDetails.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        builder
            .addCase(_deletePost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(_deletePost.fulfilled, (state,action) => {
                state.isLoading = false;
                const deleteState = state.data.findIndex(post => post.id === action.payload)
                state.post.slice(deleteState,1)
            })
            .addCase(_deletePost.rejected, (state,action) => {
                state.isLoading = true;
                state.error = action.payload;
            })
        builder
            .addCase(_updatePost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(_updatePost.fulfilled, (state,action) => {
                state.isLoading = true;
                state.data = action.payload;
            })
            .addCase(_updatePost.rejected, (state,action) => {
                state.isLoading = true;
                state.error = action.payload;
            })
        builder
            .addCase(onLikePost.pending, (state) => {
              state.isLoading = true;
            })
            .addCase(onLikePost.fulfilled, (state, action) => {
              state.isLoading = false;
              state.detail = { ...state.detail, likes: state.detail.likes };
              console.log(state.detail);
            })
            .addCase(onLikePost.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            });
        builder
            .addCase(_searchPost.pending, (state) => {
              state.isLoading = true;
            })
            .addCase(_searchPost.fulfilled, (state, action) => {
              state.isLoading = false;
              state.search = action.payload;
              console.log(state.detail);
            })
            .addCase(_searchPost.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            });
    }
})


export const {likePost} = postSlice.actions;
export default postSlice



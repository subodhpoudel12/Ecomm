import { SignInResponse, SignUpResponse } from "@/types/formTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const signUpUser = createAsyncThunk<SignUpResponse, FormData>(
  "/auth/signup",
  async (formData) => {
    const response = await axios.post(
      `http://localhost:5001/api/auth/signup`,
      formData,
      { withCredentials: true }
    );
    return response.data;
  }
);
export const signInUser = createAsyncThunk<SignInResponse, FormData>(
  "/auth/signin",
  async (formData) => {
    const response = await axios.post(
      `http://localhost:5001/api/auth/signin`,
      formData,
      { withCredentials: true }
    );
    return response.data;
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Sign Up Cases
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = true;
      })
      .addCase(signUpUser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      
      // Sign In Cases
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = true;
      })
      .addCase(signInUser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});


export const { setUser } = authSlice.actions;
export default authSlice.reducer;

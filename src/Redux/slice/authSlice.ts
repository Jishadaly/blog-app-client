// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loginUser , googleAuth } from '../services/authService';
import Cookies from 'js-cookie';



const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state:any, action) => {
        console.log('state : ',action.payload);
        
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      }) 
      .addCase(loginUser.rejected, (state:any, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(googleAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(googleAuth.rejected, (state:any, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
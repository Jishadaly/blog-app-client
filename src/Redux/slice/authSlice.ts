// src/features/auth/authSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser , googleAuth } from '../services/authService';
import Cookies from 'js-cookie';


// Define the types for the user and auth state
interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
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
      .addCase(loginUser.fulfilled, (state:any, action: PayloadAction<{ user: User; token: string }>) => {
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
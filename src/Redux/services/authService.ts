import { authInstanceAxios } from '@/api/axiosInstense';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


// Define the structure of the arguments and response
interface LoginArgs {
    endpoint: string;
    userData: {
      email: string;
      password: string;
    };
  }
  
  interface LoginResponse {
    user: any; // Replace `any` with the actual user object type if known
    token: string;
  }

export const loginUser = createAsyncThunk<LoginResponse, LoginArgs>(
  'auth/userLogin',
  async ({ endpoint, userData }, thunkAPI) => {
    try {
      console.log(endpoint, userData);
      const response = await authInstanceAxios.post(`${endpoint}`, userData);
      console.log(response);
      const user = response.data.response.user;
      const token = response.data.response.accessToken;
      console.log(user);
      Cookies.set('token', token)

      return { user, token };
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const googleAuth = createAsyncThunk(
    'auth/googleAuth',
    async ({ endpoint, userData }:any, thunkAPI) => {
  
      try {
        const response = await authInstanceAxios.post(`${endpoint}`, userData);
        console.log(response);
        
        const user = response.data.response.user;
        const token = response.data.response.token;
  
        Cookies.set('token', token)
  
        return { user, token };
      } catch (error:any) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  )
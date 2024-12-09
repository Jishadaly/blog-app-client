import { combineReducers } from "@reduxjs/toolkit";
import authslice from './slice/authSlice'


const rootReducer = combineReducers({
  auth:authslice,
})

export default rootReducer;
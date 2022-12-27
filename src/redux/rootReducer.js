
import { combineReducers } from '@reduxjs/toolkit'
import { authSlice } from './reducers/auth/slice.js'
const rootReducer = combineReducers({
  auth: authSlice.reducer
})

export default rootReducer

import { combineReducers } from '@reduxjs/toolkit'
import { authSlice } from './reducers/auth/slice.js'
import { appSlice } from './reducers/app/slice.js'
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  app: appSlice.reducer
})

export default rootReducer
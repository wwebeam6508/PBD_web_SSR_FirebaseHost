import { combineReducers } from 'redux'
import { authSlice } from './reducers/auth/slice.js'

const rootReducer = combineReducers({
  auth: authSlice.reducer
})

export default rootReducer
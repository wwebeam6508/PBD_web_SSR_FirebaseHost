import { combineReducers } from 'redux'
import authReducer from './reducers/authen/reducer.js'

const rootReducer = combineReducers({
  auth: authReducer
})

export default rootReducer
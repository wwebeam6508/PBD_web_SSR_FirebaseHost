import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer.js'

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})
import axios from 'axios'
import { setAuth, setLogout } from './slice'
import errorHandler from '../../../util/errorHandler.js'
export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { username, password })
    localStorage.setItem('user', JSON.stringify(response.data.data))
    dispatch(setAuth(response.data.data))
  } catch (error) {
    const errorRes = error.response.data.error
    errorHandler({ errorCode: errorRes.code, errorMessage: errorRes.message})
  }
}
  
export const logout = () => async (dispatch) => {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
    localStorage.removeItem('user')
    dispatch(setLogout())
  } catch (error) {
    const errorRes = error.response.data.error
    errorHandler({ errorCode: errorRes.code, errorMessage: errorRes.message})
  }
}
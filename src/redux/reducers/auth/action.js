import axios from 'axios'
import { setAuth, setLogout } from './slice'
import errorHandler from '../../../util/errorHandler.js'
import { setLoading } from '../app/slice'
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { username, password })
    localStorage.setItem('user', JSON.stringify(response.data.data))
    dispatch(setAuth(response.data.data))
    dispatch(setLoading(false))
  } catch (error) {
    const errorRes = error.response.data.error
    errorHandler({ errorCode: errorRes.code, errorMessage: errorRes.message})
    dispatch(setLoading(false))
  }
}
  
export const logout = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
    localStorage.removeItem('user')
    dispatch(setLogout())
    dispatch(setLoading(false))
  } catch (error) {
    const errorRes = error.response.data.error
    errorHandler({ errorCode: errorRes.code, errorMessage: errorRes.message})
    dispatch(setLoading(false))
  }
}
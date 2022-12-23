import axios from 'axios';
import { setAuth, setLogout } from './slice';

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { username, password });
    console.log(response)
    localStorage.setItem('user', JSON.stringify(response.data.data));
    dispatch(setAuth(response.data.data));
  } catch (error) {
    throw error.response.data.error.message;
  }
};
  
export const logout = () => async (dispatch) => {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`);
    localStorage.removeItem('user');
    dispatch(setLogout());
  } catch (error) {
    throw error.response.data.error.message;
  }
};
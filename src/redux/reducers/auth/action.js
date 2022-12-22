import axios from 'axios';
import { setAuth, setLogout } from './slice';

export const login = (username, password) => async (dispatch) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { username, password });
      dispatch(setAuth(response.data.user));
    } catch (error) {
      console.error(error);
    }
  };
  
  export const logout = () => async (dispatch) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`);
      dispatch(setLogout());
    } catch (error) {
      console.error(error);
    }
  };
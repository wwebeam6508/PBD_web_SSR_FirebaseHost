import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isAuthenticated: false,
      user: null
    },
    reducers: {
      setAuth(state, action) {
        state.isAuthenticated = true;
        state.user = action.payload;
      },
      setLogout(state) {
        state.isAuthenticated = false;
        state.user = null;
      },
    },
  });
  
  export const { setAuth, setLogout } = authSlice.actions;
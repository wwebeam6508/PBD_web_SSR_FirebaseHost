import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
      loading: false
    },
    reducers: {
      setLoading(state, action) {
        state.loading = action.payload;
      }
    },
  });
  
  export const { setLoading } = appSlice.actions;
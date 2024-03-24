import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: null,
  },
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },
    removeUserData: (state, action) => {
      state.userData = null;
    },
  },
});

export const {saveUserData, removeUserData} = authSlice.actions;

export default authSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const appSettingSlice = createSlice({
  name: 'appSetting',
  initialState: {
    isFirstTime: false,
    lang: 'english',
    isDark: false,
  },
  reducers: {
    changeFirstTime: (state, action) => {
      state.isFirstTime = action.payload;
    },
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    changeTheme: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

export const {changeFirstTime, changeLang, changeTheme} =
  appSettingSlice.actions;

export default appSettingSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const appSettingSlice = createSlice({
  name: 'appSetting',
  initialState: {
    isFirstTime: false,
    lang: 'english',
  },
  reducers: {
    changeFirstTime: (state, action) => {
      state.isFirstTime = action.payload;
    },
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const {changeFirstTime, changeLang} = appSettingSlice.actions;

export default appSettingSlice.reducer;

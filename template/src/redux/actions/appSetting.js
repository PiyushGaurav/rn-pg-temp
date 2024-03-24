import strings from '../../constants/lang';
import {changeFirstTime, changeLang, changeTheme} from '../reducers/appSetting';
import store from '../store';
import types from '../types';
const {dispatch} = store;

export const updateFirstTime = data => {
  dispatch(changeFirstTime(data));
};

export const updateLang = data => {
  strings.setLanguage(data);
  dispatch(changeLang(data));
};

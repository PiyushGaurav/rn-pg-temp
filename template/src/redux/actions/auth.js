import {clearUserData} from '../../utils/utils';
import {saveUserData, removeUserData} from '../reducers/auth';
import store from '../store';
import types from '../types';
const {dispatch} = store;

export const signUp = data => {
  dispatch(saveUserData(data)); //saveUserData is a function which is define in reducer state
};

export const login = data => {
  dispatch(saveUserData(data)); //saveUserData is a function which is define in reducer state
};

export const logout = () => {
  dispatch(removeUserData());
  clearUserData();
};

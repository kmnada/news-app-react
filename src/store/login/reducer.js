import Cookie from 'js-cookie';
import { removeStorageItem } from '../../utils/LocalStorageUtil';
import { API_KEY } from '../config/constants';

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_INIT,
  REFRESH_TOKEN
} from './type';

export const initialState = {
  loginSuccess: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_INIT:
      return initialState;
    case USER_LOGIN_SUCCESS: {
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 1);
      Cookie.set('access_token', action.payload.accessToken, { expires });
      Cookie.set('api_key', API_KEY);
      return {
        ...state,
        loginSuccess: true
      };
    }
    case USER_LOGIN_FAIL:
      return { ...state, loginSuccess: false };
    case REFRESH_TOKEN:
      return { ...state, loginSuccess: true };
    case USER_LOGOUT: {
      Cookie.remove('access_token');
      Cookie.remove('api_key');
      removeStorageItem('user');
      return { ...state, loginSuccess: false };
    }
    default:
      return state;
  }
};

export default loginReducer;

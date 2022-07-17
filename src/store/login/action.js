import Cookie from 'js-cookie';
import { setStorageItem } from '../../utils/LocalStorageUtil';
import { apiCall } from '../config/api';
import { API_URL, BASE_URL } from '../config/constants';
import { USER_LOGIN_FAIL, USER_LOGIN_INIT, USER_LOGIN_SUCCESS, USER_LOGOUT } from './type';
/**
 * It takes in an object with email and password, and an action (login or signup) and returns a
 * function that dispatches an action to the reducer
 * @param action - The action to be performed.
 * @returns A function that takes dispatch as an argument.
 */

export const loginSignUp = ({ email, password }, action) => {
  const url = `${BASE_URL['BASE']}${API_URL[action]}`;
  const requestData = { email, password };
  // will be added in interceptor
  // const headers =  {
  //     'Content-Type': 'application/json'
  //   }
  const apiArgs = {
    method: 'POST',
    url,
    data: requestData
  };

  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_INIT
    });
    try {
      const response = await apiCall(apiArgs);
      const { status, data } = response;
      if (status === 200 && data?.access_token) {
        setStorageItem('user', email);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: { accessToken: data?.access_token } });
      } else {
        dispatch({ type: USER_LOGIN_FAIL });
      }
    } catch (error) {
      dispatch({ USER_LOGIN_FAIL });
    }
  };
};

/**
 * It takes in a history object and a dispatch function, and then it dispatches an action to logout the
 * user, and then it redirects the user to the login page.
 * @param history
 * @param dispatch - The dispatch function from Redux.
 */
export const logout = (history, dispatch) => {
  dispatch({ type: USER_LOGOUT });
  history.push('/');
  Cookie.remove('api_key');
  Cookie.remove('access_token');
};

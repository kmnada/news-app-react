import axios from 'axios';
import { toast } from 'react-toastify';
import { getCookie } from '../../utils/CookieUtil';
import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from '../login/type';
import { BASE_URL } from './constants';

/**
 * It takes an object with a url, method, and body, and returns a response object.
 * @param apiArgs
 */
export const apiCall = async (apiArgs) => {
  try {
    const response = await axios(apiArgs);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message ?? 'Something went wrong!!');
    return error;
  }
};

/**
 * Function to refresh the bearer token
 * It's a function that takes in a dispatch function as an argument, and returns a boolean value
 * @param dispatch - the dispatch function from the redux store
 * @returns A boolean value.
 */
export const refreshToken = async (dispatch) => {
  // supposed to be refreshtoken url, ie. /auth/refreshtoken
  const url = `${BASE_URL['BASE']}/auth/login`;
  const requestData = { email: 'nilson8@email.com', password: 'nilson' };
  const apiArgs = {
    method: 'POST',
    url,
    data: requestData
  };
  try {
    const response = await apiCall(apiArgs);
    const { status, data } = response;
    if (status === 200 && data?.access_token) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: { accessToken: data?.access_token } });
      return true;
    } else {
      dispatch({ type: USER_LOGIN_FAIL });
      return false;
    }
  } catch (error) {
    dispatch({ USER_LOGIN_FAIL });
    return false;
  }
};

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // if token is undefined, that means the cookie has expired.ie. refreshToken has to be called.
    const token = getCookie('api_key');
    config.headers['Content-Type'] = 'application/json';
    // bearer token not working, instead using api key
    //   if (token) {
    //     config.headers['Authorization'] = 'Bearer ' + token
    //   }
    if (token && config.method === 'get') {
      config.params = { ...config.params, 'api-key': token };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
    history.pushState('/login');
  }
);

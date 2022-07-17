import axios from 'axios';
import Cookie from 'js-cookie';
import { toast } from 'react-toastify';

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

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    console.log('config', config);
    // if token is undefined, that means the cookie has expired.ie. refreshToken has to be called.
    const token = Cookie.get('api_key');
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
  }
);

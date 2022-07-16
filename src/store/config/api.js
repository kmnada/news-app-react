import axios from 'axios';
import Cookie from 'js-cookie';
import { toast } from 'react-toastify';

export const apiCall = async (apiArgs) => {
  try {
    const response = await axios(apiArgs);
    return response;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message ?? 'Something went wrong!!');
    return error;
  }
};

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
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

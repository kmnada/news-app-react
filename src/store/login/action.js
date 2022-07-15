import Cookie from 'js-cookie';
import { apiCall } from "../config/api";
import { API_URL, BASE_URL } from "../config/constants";
import { USER_LOGIN_FAIL, USER_LOGIN_INIT, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./type";

export const loginSignUp = ({ email, password }, action) => {
    const url = `${BASE_URL['BASE']}${API_URL[action]}`
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
        console.log('here');
        dispatch({
            type: USER_LOGIN_INIT,
          });
        try {
            const response = await apiCall(apiArgs);
            const { status, data } = response;
            if (status === 200 && data?.access_token) {  
                dispatch({ type : USER_LOGIN_SUCCESS, payload: { accessToken: data?.access_token } })
            } else {
                dispatch({ type: USER_LOGIN_FAIL })
            }
        } catch(error) {
            dispatch({ USER_LOGIN_FAIL });
        }
    };

}

export const logout = (history, dispatch) => {
  dispatch({ type: USER_LOGOUT });
  history.push('/');
  Cookie.remove('api_key');
  Cookie.remove('access_token');
}
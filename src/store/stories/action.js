import { apiCall } from "../config/api";
import { API_URL, BASE_URL } from "../config/constants";
import { FETCH_STORIES_FAIL, FETCH_STORIES_INIT, FETCH_STORIES_SUCCESS } from "./type";

export const fetchStories = (action) => {
    const url = `${BASE_URL.DOMAIN_URL}${API_URL.STORIES}/${action}.json`
    // will be added in interceptor
    // const headers =  {
    //     'Content-Type': 'application/json'
    //   }
    const apiArgs = {
        method: 'GET',
        url
    };
    return async (dispatch) => {
        dispatch({
            type: FETCH_STORIES_INIT,
          });debugger;
        try {
            const response = await apiCall(apiArgs);debugger;
            const { status, data } = response;
            if (status === 200 && data?.results) {  debugger;
                dispatch({ type : FETCH_STORIES_SUCCESS, payload: { stories: data?.results, length: data?.num_results } })
            } else {
                dispatch({ type: FETCH_STORIES_FAIL })
            }
        } catch(error) {
            dispatch({ FETCH_STORIES_FAIL });
        }
    };

}

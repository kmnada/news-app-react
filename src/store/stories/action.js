import { formattedSearchResults } from '../../utils/FormatSearchResults';
import handleSearchValues from '../../utils/HandleSearchValues';
import { apiCall } from '../config/api';
import { API_URL, BASE_URL } from '../config/constants';
import { FETCH_STORIES_FAIL, FETCH_STORIES_INIT, FETCH_STORIES_SUCCESS } from './type';

export const fetchStories = (action) => {
  const url = `${BASE_URL.DOMAIN_URL}${API_URL.STORIES}/${action}.json`;
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
      type: FETCH_STORIES_INIT
    });
    try {
      const response = await apiCall(apiArgs);
      const { status, data } = response;
      if (status === 200 && data?.results) {
        dispatch({
          type: FETCH_STORIES_SUCCESS,
          payload: { stories: data?.results, length: data?.num_results }
        });
      } else {
        dispatch({ type: FETCH_STORIES_FAIL });
      }
    } catch (error) {
      dispatch({ FETCH_STORIES_FAIL });
    }
  };
};

export const searchArticles = (searchWord, page = 0) => {
  handleSearchValues(searchWord);
  const url = `${BASE_URL.DOMAIN_URL}${API_URL.SEARCH_ARTICLE}?q=${searchWord}`;
  // will be added in interceptor
  // const headers =  {
  //     'Content-Type': 'application/json'
  //   }
  const apiArgs = {
    method: 'GET',
    url,
    params: {
      page
    }
  };
  return async (dispatch) => {
    dispatch({
      type: FETCH_STORIES_INIT
    });
    try {
      const response = await apiCall(apiArgs);
      const { status, data } = response;
      if (status === 200 && data?.response?.docs) {
        const results = formattedSearchResults(data?.response?.docs ?? []);
        dispatch({
          type: FETCH_STORIES_SUCCESS,
          payload: { stories: results, length: 0, totalPages: data?.response?.meta?.hits }
        });
      } else {
        dispatch({ type: FETCH_STORIES_FAIL });
      }
    } catch (error) {
      dispatch({ type: FETCH_STORIES_FAIL });
    }
  };
};

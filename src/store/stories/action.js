import { formattedSearchResults } from '../../utils/FormatSearchResults';
import handleSearchValues from '../../utils/HandleSearchValues';
import { apiCall } from '../config/api';
import { API_URL, BASE_URL } from '../config/constants';
import {
  FETCH_STORIES_FAIL,
  FETCH_STORIES_INIT,
  FETCH_STORIES_SUCCESS,
  FETCH_COMMENTS_FAIL,
  FETCH_COMMENTS_INIT,
  FETCH_COMMENTS_SUCCESS
} from './type';

/**
 * To get stories
 * It takes an action, and returns a function that takes a dispatch function.
 * @param action - The action that was dispatched.
 */
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

/**
 * It takes a search word and a page number as arguments, and returns a promise that resolves to an
 * array of articles.
 * @param searchWord - The word you want to search for.
 * @param [page=0] - The page number of the results to return.
 */
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

/**
 * It makes an API call to fetch comments and dispatches an action based on the response
 * @returns A function that takes dispatch as an argument.
 */
export const fetchComments = () => {
  const url = `${BASE_URL.DOMAIN_URL}`;
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
      type: FETCH_COMMENTS_INIT
    });
    try {
      const response = await apiCall(apiArgs);
      const { status, data } = response;
      if (status === 200 && data?.response?.docs) {
        const results = formattedSearchResults(data?.response?.docs ?? []);
        dispatch({
          type: FETCH_COMMENTS_SUCCESS,
          payload: { comments: results }
        });
      } else {
        dispatch({ type: FETCH_COMMENTS_FAIL });
      }
    } catch (error) {
      dispatch({ type: FETCH_COMMENTS_FAIL });
    }
  };
};

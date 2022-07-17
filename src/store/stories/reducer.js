import {
  FETCH_STORIES_FAIL,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_INIT,
  FETCH_COMMENTS_FAIL,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_INIT,
  STORIES_CLEAR_ALL
} from './type';

export const initialState = {
  isLoading: false,
  stories: [],
  length: 0,
  totalPages: 0,
  comments: [],
  loadingComments: false
};

/**
 * It returns a new state object based on the action type
 * @param [state] - The current state of the reducer.
 * @param action - This is the action object that is dispatched from the action creator.
 * @returns The state is being returned.
 */
const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORIES_INIT:
      return { ...state, isLoading: true };
    case FETCH_STORIES_SUCCESS: {
      return {
        ...state,
        stories: action.payload.stories,
        length: action.payload.length,
        isLoading: false,
        totalPages: action.payload.totalPages ?? 0
      };
    }
    case FETCH_STORIES_FAIL:
      return { ...state, isLoading: false, stories: [] };
    case FETCH_COMMENTS_INIT:
      return { ...state, loadingComments: true };
    case FETCH_COMMENTS_SUCCESS: {
      return {
        ...state,
        comments: action.payload.comments,
        loadingComments: false
      };
    }
    case FETCH_COMMENTS_FAIL:
      return { ...state, comments: [], loadingComments: false };
    case STORIES_CLEAR_ALL:
      return initialState;
    default:
      return state;
  }
};

export default storiesReducer;

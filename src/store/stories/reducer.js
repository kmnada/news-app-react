import { FETCH_STORIES_FAIL, FETCH_STORIES_SUCCESS, FETCH_STORIES_INIT, STORIES_CLEAR_ALL } from './type';

export const initialState = {
    isLoading: false,
    stories: [],
    length: 0,
    totalPages: 0
}

const storiesReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_STORIES_INIT:
            return { ...state, isLoading: true };
        case FETCH_STORIES_SUCCESS:{
            return {
                ...state,
                stories: action.payload.stories,
                length: action.payload.length,
                isLoading: false,
                totalPages: action.payload.totalPages ?? 0
            }}
        case FETCH_STORIES_FAIL:
            return { ...state, isLoading: false, stories: [] }
        case STORIES_CLEAR_ALL:
            return initialState;
        default:
            return state;
    }
}

export default storiesReducer;
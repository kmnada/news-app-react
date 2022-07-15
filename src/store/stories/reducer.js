import { FETCH_STORIES_FAIL, FETCH_STORIES_SUCCESS, FETCH_STORIES_INIT } from './type';

const initialState = {
    isLoading: false,
    stories: [],
    length: 0
}

const storiesReducer = (state=initialState, action) => {debugger;
    switch(action.type) {
        case FETCH_STORIES_INIT:
            return state;
        case FETCH_STORIES_SUCCESS:{
            return initialState}
        case FETCH_STORIES_FAIL:
            return initialState ;
        default:
            return state;
    }
};

export default storiesReducer;
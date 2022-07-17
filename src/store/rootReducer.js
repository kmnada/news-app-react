import { combineReducers } from 'redux';
import loginReducer from './login/reducer';
import storiesReducer from './stories/reducer';

/* Combining the reducers into one reducer. */
const rootReducer = combineReducers({ storiesReducer, loginReducer });

export default rootReducer;

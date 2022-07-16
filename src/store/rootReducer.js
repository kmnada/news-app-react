import { combineReducers } from 'redux';
import loginReducer from './login/reducer';
import storiesReducer from './stories/reducer';

const rootReducer = combineReducers({ storiesReducer, loginReducer });

export default rootReducer;

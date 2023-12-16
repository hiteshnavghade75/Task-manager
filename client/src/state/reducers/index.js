import { combineReducers } from 'redux';
import userReducer from './userReducer';

const reducers = combineReducers({
    user: userReducer
    // other reducers can be added here
});

export default reducers;

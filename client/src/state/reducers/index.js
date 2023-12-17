import { combineReducers } from 'redux';
import userReducer from './userReducer';
import taskReducer from './taskReducer';

const reducers = combineReducers({
    user: userReducer,
    task : taskReducer
});

export default reducers;

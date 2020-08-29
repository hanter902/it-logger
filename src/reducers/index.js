import { combineReducers } from 'redux';
import logReducers from './logReducer';

export default combineReducers({
    log: logReducers
});
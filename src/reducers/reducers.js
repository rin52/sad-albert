import { combineReducers } from 'redux';
import systemState from './systemReducer';
import satchelState from './satchelReducer';

export default combineReducers({
    systemState,
    satchelState,
});
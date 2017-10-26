import { combineReducers } from 'redux';
import storage from './storage';
import compositions from './compositions';

const rootReducer = combineReducers({
  storage,
  compositions,
});

export default rootReducer;

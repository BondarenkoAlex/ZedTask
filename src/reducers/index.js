import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import storage from './storage';
import compositions from './compositions';

const rootReducer = combineReducers({
  storage,
  compositions,
  loadingBar: loadingBarReducer,
});

export default rootReducer;

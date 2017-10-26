import { IS_OPEN_WINDOW_TOGGLE } from '../constants';

import {
  getState,
  saveState,
} from '../utils/localStorage';

const initialState = {
  isOpenWindow: getState('isOpenWindow') || false,
};

function storage(state = initialState, action) {
  switch (action.type) {
    case IS_OPEN_WINDOW_TOGGLE: {
      saveState('isOpenWindow', action.payload);
      const isOpenWindow = getState('isOpenWindow');
      return { isOpenWindow };
    }

    default:
      return state;
  }
}

export default storage;

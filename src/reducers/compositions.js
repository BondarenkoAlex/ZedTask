import {
  COMPOSITIONS_GET_REQUEST,
  COMPOSITIONS_GET_SUCCESS,
  COMPOSITIONS_GET_FAILURE,
} from '../constants';

const initialState = {
  isFetching: false,
  error: null,
  itemsByKey: {},
};

function compositions(state = initialState, action) {
  switch (action.type) {
    case COMPOSITIONS_GET_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case COMPOSITIONS_GET_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        itemsByKey: {
          ...state.itemsByKey,
          ...action.payload,
        },
      };
    }

    case COMPOSITIONS_GET_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}

export default compositions;

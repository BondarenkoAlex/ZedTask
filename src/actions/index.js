/* eslint-disable no-use-before-define */
import axios from 'axios';
import { normalize } from 'normalizr';

import {
  IS_OPEN_WINDOW_TOGGLE,
  COMPOSITIONS_GET_REQUEST,
  COMPOSITIONS_GET_SUCCESS,
  COMPOSITIONS_GET_FAILURE,
} from '../constants';

import { compositionsListSchema } from '../normalize';

import { isEmpty } from '../utils/check';

export function loadCompositionsIfNeed() {
  return (dispatch, getState) => {
    const { compositions: { isFetching, itemsByKey } } = getState();

    if (isFetching) {
      // как вариант можно былобы вернуть промис для реализации оповещения
      return;
    }

    if (isEmpty(itemsByKey)) {
      dispatch(actionCreater(COMPOSITIONS_GET_REQUEST, null));

      axios.get('http://cdn.music.beeline.ru/api/v2/music/clips/popularList')
        .then((response) => {
          const data = response.data;
          const normalizeData = normalize(data.result.items, compositionsListSchema);
          dispatch(actionCreater(COMPOSITIONS_GET_SUCCESS, normalizeData.entities.compositions));
        })
        .catch((error) => {
          const message = error.response
            ? error.response.data
            : error.message;
          dispatch(actionCreater(COMPOSITIONS_GET_FAILURE, message));
        });
    }
  };
}

export function isOpenWindowToggle() {
  return (dispatch, getState) => {
    const { storage: { isOpenWindow } } = getState();
    const payload = !isOpenWindow;
    dispatch(actionCreater(IS_OPEN_WINDOW_TOGGLE, payload));
  };
}

function actionCreater(type, payload) {
  return {
    type,
    payload,
  };
}

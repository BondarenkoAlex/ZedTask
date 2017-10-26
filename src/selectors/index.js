/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const compositionsSelect = state => state.compositions;

export const compositionsSelector = createSelector(
  compositionsSelect,
  (composition) => {
    const { isFetching, error, itemsByKey } = composition;

    return ({
      isFetching,
      error,
      items: Object.keys(itemsByKey).map(key => itemsByKey[key]),
    });
  },
);

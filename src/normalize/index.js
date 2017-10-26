/* eslint-disable import/prefer-default-export */
import { schema } from 'normalizr';

const compositionsSchema = new schema.Entity('compositions', {}, {
  processStrategy: (value) => {
    const { id, snippet } = value;
    return {
      id,
      ...snippet,
    };
  },
});
export const compositionsListSchema = [compositionsSchema];

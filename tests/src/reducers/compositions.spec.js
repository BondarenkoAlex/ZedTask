import React from 'react';
import { expect } from 'chai';
import '../../setupTests';
import { COMPOSITIONS_GET_REQUEST } from '../../../src/constants';
import compositions from '../../../src/reducers/compositions';

describe('reducers', () => {
  it('Состояние инициализации', () => {
    const state = compositions(undefined, {});
    debugger;
    expect(state).to.be.an('object');
  });
});

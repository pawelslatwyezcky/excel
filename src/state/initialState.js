import { defaultStyles } from '../constants';
import { storage } from '../core/utils';

const defaultState = {
  rowState: {},
  colState: {},
  currentText: '',
  dataState: {},
  stylesState: {},
  currentStyles: defaultStyles,
  titleState: 'New table',
};

export const initialState = storage('state') ? storage('state') : defaultState;

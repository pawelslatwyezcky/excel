import { defaultStyles } from '../constants';

const defaultState = {
  rowState: {},
  colState: {},
  currentText: '',
  dataState: {},
  stylesState: {},
  currentStyles: defaultStyles,
  titleState: 'New table',
};

const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: '',
});

export function normalizeInitialState(state) {
  return state ? normalize(state) : { ...defaultState };
}

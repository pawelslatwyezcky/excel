import {
  APPLY_STYLE,
  CHANGE_STYLES,
  CHANGE_TEXT,
  CHANGE_TITLE,
  TABLE_RESIZE,
} from './types';

export function rootReducer(state, action) {
  let prevState;
  switch (action.type) {
    case TABLE_RESIZE:
      if (action.data.type === 'col') {
        prevState = state.colState || {};
        prevState[action.data.id] = action.data.value;
        return { ...state, colState: prevState };
      } else {
        prevState = state.rowState || {};
        prevState[action.data.id] = action.data.value;
        return { ...state, rowState: prevState };
      }
    case CHANGE_TEXT:
      prevState = state.dataState || {};
      prevState[action.data.id] = action.data.value;
      return { ...state, currentText: action.data.value, dataState: prevState };
    case CHANGE_STYLES:
      return { ...state, currentStyles: action.data };
    case APPLY_STYLE:
      prevState = state.stylesState || {};
      action.data.ids.forEach((id) => {
        prevState[id] = { ...prevState[id], ...action.data.value };
      });

      return {
        ...state,
        stylesState: prevState,
        currentStyles: { ...state.currentStyles, ...action.data.value },
      };
    case CHANGE_TITLE:
      return { ...state, titleState: action.data };
    default:
      return state;
  }
}

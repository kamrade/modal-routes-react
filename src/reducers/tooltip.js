import { SHOW_TOOLTIP } from 'actions';
import { HIDE_TOOLTIP } from 'actions';

const initialState = {
  show: false,
  message: '',
  top: 0,
  left: 0,
  width: 0
}

export default function tooltip(state = initialState, action = {}) {
  switch(action.type) {

    case SHOW_TOOLTIP:
      return {
        show: action.show,
        message: action.message,
        top: action.top,
        left: action.left,
        width: action.width
      };

    case HIDE_TOOLTIP:
      return {
        show: action.show,
        message: action.message,
        top: 0,
        left: 0,
        width: 0
      };

    default:
      return state;
  }
};

import { SET_ALERTS } from 'actions';

export default function cards(state = [], action = {}) {
  switch(action.type) {

    case SET_ALERTS:
      return action.alerts;

    default:
      return state;
  }
};

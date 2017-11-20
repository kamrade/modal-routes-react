import { SET_ALERTS } from '../actions';

export default function cards(state = [], action = {}) {
  switch(action.type) {

    case SET_ALERTS:
      return action.alerts;

    // case REMOVE_ALERT:
    //   return state.filter(item => item._id !== action.id);

    default:
      return state;
  }
};

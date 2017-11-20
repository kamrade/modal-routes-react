import { SET_LOADS } from '../actions';

export default function cards(state = [], action = {}) {
  switch(action.type) {

    case SET_LOADS:
      return action.loads;

    default:
      return state;
  }
};

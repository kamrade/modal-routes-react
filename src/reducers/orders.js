import { SET_ORDERS } from 'actions';

export default function cards(state = [], action = {}) {
  switch(action.type) {

    case SET_ORDERS:
      return action.orders;

    default:
      return state;
  }
};

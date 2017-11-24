import { SET_MODAL } from 'actions';

const initialState = {
  modal: false
}

export default function cards(state = initialState, action = {}) {
  switch(action.type) {

    case SET_MODAL:
      return {
        modal: action.modal
      };

    default:
      return state;
  }
};

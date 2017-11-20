export const SET_CARDS = 'SET_CARDS';
export const SET_LOADS = 'SET_LOADS';

export function setCards(cards) {
  return {
    type: SET_CARDS,
    cards
  };
}

export function setLoads(loads) {
  return {
    type: SET_LOADS,
    loads
  };
}

export function fetchCards() {
  return dispatch => {
    fetch('api/cards')
      .then(res => res.json())
      .then(data => dispatch(setCards(data.cards)));
  }
}

export function fetchLoads() {
  return dispatch => {
    fetch('api/loads')
      .then(res => res.json())
      .then(data => dispatch(setLoads(data.loads)));
  }
}

export const SET_CARDS    = 'SET_CARDS';
export const SET_LOADS    = 'SET_LOADS';
export const SET_ALERTS   = 'SET_ALERTS';

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

export function setAlerts(alerts) {
  return {
    type: SET_ALERTS,
    alerts
  };
}

export function removeAlert(id) {
  return dispatch => {
    return fetch('/api/alert', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
      .then(data => dispatch(setAlerts(data.alerts)))
  }
}

function handleResponse(response) {
  if (response.ok) {
    console.log('response ok');
    return response.json();
  } else {
    console.log('response error');
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
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

export function fetchAlerts() {
  return dispatch => {
    fetch('api/alerts')
      .then(res => res.json())
      .then(data => dispatch(setAlerts(data.alerts)));
  }
}

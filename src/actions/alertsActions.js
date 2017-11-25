export const SET_ALERTS   = 'SET_ALERTS';

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

export function fetchAlerts() {
  return dispatch => {
    fetch('api/alerts')
      .then(res => res.json())
      .then(data => dispatch(setAlerts(data.alerts)));
  }
}

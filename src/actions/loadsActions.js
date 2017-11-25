export const SET_LOADS = 'SET_LOADS';

export function setLoads(loads) {
  return {
    type: SET_LOADS,
    loads
  };
}

export function fetchLoads() {
  return dispatch => {
    fetch('api/loads')
      .then(res => res.json())
      .then(data => dispatch(setLoads(data.loads)));
  }
}

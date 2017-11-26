export const SET_ORDERS = 'SET_ORDERS';

export function setOrders(orders) {
  return {
    type: SET_ORDERS,
    orders
  };
}

export function fetchOrders() {
  return dispatch => {
    fetch('api/orders')
      .then(res => res.json())
      .then(data => dispatch(setOrders(data.orders)));
  }
}

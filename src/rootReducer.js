import { combineReducers } from 'redux';
import cards   from './reducers/cards';
import orders  from './reducers/orders';
import loads   from './reducers/loads';
import alerts  from './reducers/alerts';
import tooltip from './reducers/tooltip';
import ui from './reducers/ui';

export default combineReducers({
  cards,
  orders,
  loads,
  alerts,
  tooltip,
  ui
});

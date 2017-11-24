import { combineReducers } from 'redux';
import cards from './reducers/cards';
import loads from './reducers/loads';
import alerts from './reducers/alerts';
import tooltip from './reducers/tooltip';
import ui from './reducers/ui';

export default combineReducers({
  cards,
  loads,
  alerts,
  tooltip,
  ui
});

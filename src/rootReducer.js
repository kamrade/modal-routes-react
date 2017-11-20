import { combineReducers } from 'redux';
import cards from './reducers/cards';
import loads from './reducers/loads';
import alerts from './reducers/alerts';

export default combineReducers({
  cards,
  loads,
  alerts
});

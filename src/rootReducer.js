import { combineReducers } from 'redux';
import cards from './reducers/cards';
import loads from './reducers/loads';

export default combineReducers({
  cards,
  loads
});

import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/rooms';

const reducer = combineReducers({
  roomsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;

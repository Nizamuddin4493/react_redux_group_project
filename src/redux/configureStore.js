import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer, { rockets } from './rockets/rockets';
import missions from './missions/mission';

const rootReducer = combineReducers({ rocketReducer, missions });

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

store.dispatch(rockets());

export default store;

import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer, { rockets } from './rockets/rockets';
import missionReducer, { missionThunk } from './missions/mission';

const rootReducer = combineReducers({ rocketReducer, missionReducer });

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

store.dispatch(rockets());
store.dispatch(missionThunk());

export default store;

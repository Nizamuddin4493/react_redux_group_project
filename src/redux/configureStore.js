import { combineReducers, createStore } from 'redux';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({ rocketReducer });

const store = createStore(rootReducer);

export default store;

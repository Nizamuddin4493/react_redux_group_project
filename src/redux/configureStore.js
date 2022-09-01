import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missions from './missions/mission';

const rootReducer = combineReducers({ rocketReducer, missions });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

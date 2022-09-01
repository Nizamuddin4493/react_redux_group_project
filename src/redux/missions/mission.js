import * as actions from '../types';

const inititalState = [];

const missions = (state = inititalState, action) => {
  switch (action.type) {
    case `${actions.GET_MISSIONS}`:
      return action.payload;
    default:
      return state;
  }
};

export default missions;

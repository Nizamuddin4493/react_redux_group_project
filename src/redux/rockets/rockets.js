const INITIAL_STATE = [];

export default function rocketReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'something':
      return state;
    case 'something new':
      return 'something';
    default:
      return 'something';
  }
}

import {createStore} from 'redux';

const initState = {
  user: {
    auth: 'guest',
    uid: ''
  }
}

const reducers = (state = initState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return Object.assign({}, state, action.payload);
    case 'USER_LOGOUT':
      return Object.assign({}, state, {user: {}});
    default:
      return state;
  }
}

const store = createStore(reducers);

export default store;
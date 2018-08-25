import {createStore} from 'redux';

const init = localStorage.getItem('_react_koa_blog_user') ? JSON.parse(localStorage.getItem('_react_koa_blog_user')) : {}
const initState = {
  user: init
}

const reducers = (state = initState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return Object.assign({}, state, {user: action.payload});
    case 'USER_LOGOUT':
      return Object.assign({}, state, {user: {}});
    default:
      return state;
  }
}

const store = createStore(reducers);

export default store;
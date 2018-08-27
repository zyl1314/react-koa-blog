import store from '@redux/store';
const { dispatch } = store;

export function login(user) {
  dispatch({
    type: 'USER_LOGIN',
    payload: user
  })
  localStorage.setItem('_react_koa_blog_user', JSON.stringify(user));
}

export function logout() {
  dispatch({
    type: 'USER_LOGOUT'
  })
  localStorage.removeItem('_react_koa_blog_user');
}
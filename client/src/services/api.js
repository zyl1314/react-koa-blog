import request from '@utils/request';

export function login(params) {
  return request('/api/login', {
    method: 'POST',
    body: params
  })
}

export function registe(params) {
  return request('/registe', {
    method: 'POST',
    body: params
  })
}

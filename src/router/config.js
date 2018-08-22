export default [
  {
    path: '/user',
    name: 'user',
    authority: ['user'],
    component: () => import('@views/user')
  }
]
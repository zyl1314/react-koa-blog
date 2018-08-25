export default [
  {
    path: '/index',
    key: 'index',
    auths: ['user', 'guest'],
    component: () => import('@routes/index'),
    redirect: '/login'
  },
  {
    path: '/user',
    key: 'user',
    auths: ['user'],
    component: () => import('@routes/user'),
    redirect: '/login'
  },
  {
    path: '/article',
    key: 'article',
    auths: ['user', 'guest'],
    component: () => import('@routes/article'),
    redirect: '/login'
  },
  {
    path: '/publish',
    key: 'publish',
    auths: ['user', 'guest'],
    component: () => import('@routes/publish'),
    redirect: '/login'
  }
];
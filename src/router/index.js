import App from '../App'
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    }
  ]
}]

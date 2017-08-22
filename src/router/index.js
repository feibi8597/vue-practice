import App from '../App'
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const register = r => require.ensure([], () => r(require('../page/register/register')), 'register')
const forgot = r => require.ensure([], () => r(require('../page/forgot/forgot')), 'forgot')
const layouts = r => require.ensure([], () => r(require('../page/layouts/layouts')), 'layouts')
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
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/forgot',
      component: forgot
    },
    {
      path: '/app',
      component: layouts
    }
  ]
}]

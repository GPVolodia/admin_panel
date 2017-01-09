import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'

// Redirects to /login by default
export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.login, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check,
  failureRedirectPath: '/login',
  allowRedirectBack: false
})

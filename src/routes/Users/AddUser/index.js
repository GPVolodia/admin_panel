import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  path : 'users/add_user',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const AddUser = require('./containers/UserContainer').default
      const reducer = require('./modules/addUser').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'add_user', reducer })

      /*  Return getComponent   */
      cb(null, AddUser)

    /* Webpack named bundle   */
    }, 'add_user')
  }
})

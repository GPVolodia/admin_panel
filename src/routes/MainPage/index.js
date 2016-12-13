import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'some_page',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SomePage = require('./containers/SomePageContainer').default
      const reducer = require('./modules/somePage').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter', reducer })

      /*  Return getComponent   */
      cb(null, SomePage)

    /* Webpack named bundle   */
    }, 'some_page')
  }
})

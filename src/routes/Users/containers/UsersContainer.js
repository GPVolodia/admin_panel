import { connect } from 'react-redux'
import { setUsers } from '../modules/users'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Users from '../components/Users'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  initialData() {
    return (dispatch, getState) => {
      fetch('http://api.eldorado.dev/v1/banners').then( response => {
        console.log('getting initial Data')
        if (response.status >= 200 && response.status < 300) {
          let promise = response.json()
          promise.then( result => {
            if (result.data && result.data.length !==0) {
              let usersArray = {
                meta: result.meta,
                data: result.data
              }
              dispatch(setUsers(usersArray))
            }
          })
        }
      })
    }
  },
  deleteElement(elementID) {
    return (dispatch, getState) => {
      fetch('http://api.eldorado.dev/v1/banners/?id='+elementID,
        {
          method: 'DELETE'
        }
      ).then( () => {})
      fetch('http://api.eldorado.dev/v1/banners').then( response => {
        console.log('getting initial Data')
        if (response.status >= 200 && response.status < 300) {
          let promise = response.json()
          promise.then( result => {
            if (result.data && result.data.length !==0) {
              let usersArray = {
                meta: result.meta,
                data: result.data
              }
              dispatch(setUsers(usersArray))
            }
          })
        }
      })
    }
  }
}

const mapStateToProps = (state) => ({
  children : state.users
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Users)

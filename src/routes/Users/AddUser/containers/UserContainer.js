import { connect } from 'react-redux'
import { setUsers } from '../modules/addUser'
import { push } from 'react-router-redux'
/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import AddUser from '../components/AddUser'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  onSubmit(formData) {
    return (dispatch, getState) => {
      let url = mapDispatchToProps.formURL(formData)

      fetch('http://api.eldorado.dev/v1/banners/?'+url,
        {
          method: 'POST'
        }
      ).then( response => {
        console.log('herer')
        dispatch(push('/users/'))
        console.log('herer321321')
      })
      console.log('result url', url);
    }
  },
  formURL(data) {
    let urlString = ''
    for (var key in data) {
      if (data[key] !== null) {
        if (urlString !== '') {
          urlString += '&'
        }
        urlString += key + '=' + encodeURIComponent(data[key])
      }
    }
    return urlString
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)

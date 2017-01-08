import { connect } from 'react-redux'
import { editUser } from '../modules/editUser'
import { push } from 'react-router-redux'
/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import EditUser from '../components/EditUser'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  onSubmit(formData) {
    return (dispatch, getState) => {
      let url = mapDispatchToProps.formURL(formData)

      fetch('http://api.eldorado.dev/v1/banners/?'+url,
        {
          method: 'PUT'
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
  },
  returnEditableUser(userID) {
    return (dispatch, getState) => {
      fetch('http://api.eldorado.dev/v1/banners/?conditions=id='+userID,
        {
          method: 'GET'
        }
      ).then( response => {
        if (response.status >= 200 && response.status < 300) {
          let promise = response.json()
          promise.then( result => {
            if (result.data && result.data.length !==0) {
              let usersArray = {
                meta: result.meta,
                data: result.data
              }
              dispatch(editUser(usersArray))
            }
          })
        }
      })
      
    }
  }
}

const mapStateToProps = (state) => ({
  children : state.edit_user,
  initialValues: state.edit_user.data
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

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)

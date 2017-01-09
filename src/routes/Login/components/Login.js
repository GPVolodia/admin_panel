import React, { PropTypes, Component } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import { IndexLink, Link } from 'react-router'
import {
  RadioButtonGroup,
  TextField,
  SelectField
} from 'redux-form-material-ui'
import { reduxForm, Field } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import { RadioButton } from 'material-ui/RadioButton'

/**
 * @TODO : Change fields according to database table, CRUD, design
 */

class Login extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    onChildClick: PropTypes.func,
    checker: PropTypes.func,
    setInitialBannerData: PropTypes.func,
    deleteCurrentBanner: PropTypes.func,
    getInitialData: PropTypes.func,
    loadFileToApi: PropTypes.func,
    toBannersList: PropTypes.func,
    onSubmit: PropTypes.func,
    location: PropTypes.oneOfType([
      PropTypes.boolean,
      PropTypes.func,
      PropTypes.obj
    ]),
    pristine: PropTypes.oneOfType([
      PropTypes.boolean,
      PropTypes.func
    ]),
    reset: PropTypes.oneOfType([
      PropTypes.boolean,
      PropTypes.func,
      PropTypes.obj
    ]),
    submitting: PropTypes.oneOfType([
      PropTypes.boolean,
      PropTypes.func
    ]),
    params: PropTypes.oneOfType([
      PropTypes.boolean,
      PropTypes.func,
      PropTypes.obj
    ]),
  };

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props
    return (
      <div style={{ margin: '0 auto' }}>
        Увійти на сайт
        <form onSubmit={handleSubmit}>
          <div className='form-section'>
            <Field name='id' component={TextField} value='YO' hintText='Назва банера'
                   floatingLabelText='Логін' ref='login' withRef className='form-field' />
          </div>
          <br />
          <br />
          <button type='submit' label='Редагувати' className='btn btn-default' primary
                  disabled={pristine || submitting}>Увійти</button>
        </form>
      </div>
    )
  }
}

Login = reduxForm({
  form: 'login' // a unique name for this form
})(Login);

export default Login

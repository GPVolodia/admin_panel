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

class EditUser extends Component {
  static propTypes = {
    counter     : React.PropTypes.number.isRequired,
    doubleAsync : React.PropTypes.func.isRequired,
    increment   : React.PropTypes.func.isRequired
  }

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

  componentWillMount() {
    this.props.returnEditableUser(this.props.params.userID)
  }

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props
    let currentUser = this.props.children.data
    console.log('currentUser', currentUser)
    return (
      <div style={{ margin: '0 auto' }}>
        Редагування користувача :
        <form initialValues={currentUser} onSubmit={handleSubmit}>
          <div className='form-section'>
            <Field name='name' component={TextField} value='YO' hintText='Назва банера'
                   floatingLabelText='Назва банера' ref='name' withRef className='form-field' />
          </div>
          <div className='form-section'>
            <Field name='banner_href' component={TextField} hintText='Посилання баннера'
                   floatingLabelText='Посилання баннера' className='form-field' />
          </div>
          <div className='form-section'>
            <Field name='output_position' component={TextField} hintText='Позиція виведення'
                   floatingLabelText='Позиція виведення' className='form-field' />
          </div>
          <div className='form-section'>
            <Field name='order_number' component={TextField} hintText='Порядок виведення'
                   floatingLabelText='Порядок виведення' className='form-field' />
          </div>
          <br /><br /><br />
          <br />
          <br />
          <div>
            <button type='submit' label='Редагувати' className='btn btn-default' primary
                    disabled={pristine || submitting}>Редагувати</button>
            <button type='submit' label='Стерти' className='btn btn-default' primary
                    disabled={pristine || submitting} onClick={reset}>Стерти</button>
          </div>
        </form>
      </div>
    )
  }
}

EditUser = reduxForm({
  form: 'edit_user', // a unique name for this form,
  enableReinitialize: true,
}, state => ({
    initialValues: state.edit_user.data // pull initial values from account reducer
  })
)(EditUser)

export default EditUser

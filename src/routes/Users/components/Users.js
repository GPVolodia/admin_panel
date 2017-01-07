import React, { PropTypes, Component } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import { IndexLink, Link } from 'react-router'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
/**
 * @TODO : Change fields according to database table, CRUD, design
 */

class Users extends Component {
  static propTypes = {
    counter     : React.PropTypes.number.isRequired,
    doubleAsync : React.PropTypes.func.isRequired,
    increment   : React.PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.initialData();
  }

  render() {
    var usersList = this.props.children.data
    return (
      <div style={{ margin: '0 auto' }}>
        <div className="user-settings">
          <Link to={{pathname: '/users/add_user'}}>
            <button label='Створити' className='btn btn-default'>
              <i className="fa fa-plus"/>  Добавити користувача
            </button>
          </Link>
        </div>
        <br/>
        <div className="user-settings">
          <Link to={{pathname: '/users/delete_user'}}>
            <button label='Створити' className='btn btn-default'>
              <i className="fa fa-minus"/>  Видалити користувача
            </button>
          </Link>
        </div>
        Список користувачів
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ім"я</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {usersList && usersList.length !== 0 ? usersList.map( user =>
              <tr>
                <th>{user.id}</th>
                <th>{user.name}</th>
                <th>{user.status}</th>
              </tr>
            ): ''}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Users

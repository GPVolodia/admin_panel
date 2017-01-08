import React, { PropTypes, Component } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import { IndexLink, Link } from 'react-router'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import './Users.scss'
/**
 * @TODO : Change fields according to database table, CRUD, design
 */

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listActiveElement: null,
      rerenderPage: false
    }
  }

  static propTypes = {
    counter     : React.PropTypes.number.isRequired,
    doubleAsync : React.PropTypes.func.isRequired,
    increment   : React.PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.initialData();
  }

  deleteCurrentElement() {
    let element = new Promise((resolve, reject) => {
      this.props.deleteElement(this.state.listActiveElement)
    })
  }

  returnActiveElement(activeID) {
    this.setState({listActiveElement: activeID})
  }

  ifActive(id) {
    let style = ''
    if (id === this.state.listActiveElement) {
      style = 'user-element-active'
    }
    return style
  }

  render() {
    var usersList = this.props.children.data
    console.log('this.state.rerenderPage', this.state.rerenderPage)
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
            <button label='Видалити' className='btn btn-default' onClick={() => this.deleteCurrentElement()}>
              <i className="fa fa-minus"/>  Видалити користувача
            </button>
        </div>
        Список користувачів
        <table className="responsive-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ім"я</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {usersList && usersList.length !== 0 ? usersList.map( user =>
              <tr onClick={() => this.returnActiveElement(user.id)}
                  className={'user-table-row ' + this.ifActive(user.id)}>
                <Link to={{pathname: `/users/${user.id}`}}>
                  <th>{user.id}</th>
                </Link>
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

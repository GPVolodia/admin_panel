import React, { Proptypes, Component } from 'react'
import MenuList from '../../components/Fields/MenuList'
import Header from '../../components/Fields/Header'
import './CoreLayout.scss'
import '../../styles/materialize/css/materialize.css'
import '../../styles/font-awesome-4.7.0/css/font-awesome.css'
import '../../styles/core.scss'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class CoreLayout extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className='page-container row'>
          <Header />
          <div className="col s3 m3 l2 menu-place">
            <MenuList />
          </div>
          <div className="col s9 m9 l10 content-place">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout

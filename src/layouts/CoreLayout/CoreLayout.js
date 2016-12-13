import React, { Proptypes, Component } from 'react'
import MenuList from '../../components/Fields/MenuList'
import Header from '../../components/Fields/Header'
import './CoreLayout.scss'
import '../../styles/materialize/css/materialize.css'
import '../../styles/font-awesome-4.7.0/css/font-awesome.css'
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'
import '../../styles/core.scss'

// export const CoreLayout = ({ children }) => (
//   <div className='container text-center'>
//     <Header />
//       21
//     <div className='core-layout__viewport'>
//       {children}
//     </div>
//   </div>
// )

class CoreLayout extends Component {
    render() {
        return(
            <div className='page-container row'>
                <Header />
                <div className="col s3 m3 l2 menu-place">
                    <MenuList />
                </div>
                <div className="col s9 m9 l10 content-place">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout

/**
 * Created by root on 13.12.16.
 */
import React, { Proptypes, Component } from 'react'
import { IndexLink, Link } from 'react-router'
import '../../styles/MenuList.scss'

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeList: null
        }
    }

    setActiveItemList(param) {
        this.setState({activeList: param});
    }

    returnActiveItemList(param) {
       let elementClass = '';
       if (this.state.activeList === param) {
           elementClass = 'active';
       }
       return elementClass;
    }

    render() {
        return (
            <div className="menu-place row">
                <ul className="menu-list">
                    <Link to='/main_page' activeClassName='route--active'>
                        <li className={'menu-item ' + this.returnActiveItemList(1)} onClick={() => {this.setActiveItemList(1)}}>
                            <i className="fa fa-home"/> Головна сторінка
                        </li>
                    </Link>
                    <Link to='/counter' activeClassName='route--active'>
                        <li className={'menu-item ' + this.returnActiveItemList(2)} onClick={() => {this.setActiveItemList(2)}}>
                            <i className="fa fa-user"/> Користувачі
                        </li>
                    </Link>
                    <Link to='/some_page' activeClassName='route--active'>
                        <li className={'menu-item ' + this.returnActiveItemList(3)} onClick={() => {this.setActiveItemList(3)}}>
                            <i className="fa fa-dollar"/> Ціни
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default MenuList
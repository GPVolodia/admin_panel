/**
 * Created by root on 13.12.16.
 */
import React, { Proptypes, Component } from 'react'
import { IndexLink, Link } from 'react-router'
import '../../styles/MenuList.scss'

class MenuList extends Component {
    render() {
        return (
            <div className="menu-place row">
                <div className="menu-title">Меню</div>
                <ul className="menu-list">
                    <li className="menu-item">
                        <Link to='/counter' activeClassName='route--active'>
                            Користувачі
                        </Link>
                    </li>
                    <li className="meu-item">
                        <Link to='/some_page' activeClassName='route--active'>
                            Ціни
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MenuList
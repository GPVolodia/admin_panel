/**
 * Created by root on 13.12.16.
 */
import React, { Proptypes, Component } from 'react'
import '../../styles/Header.scss'

class Header extends Component {
    render() {
        return (
            <div className="header-place row valign-wrapper">
                <div className="header-title col s3 m3 l3"><img src="img/site_logo.jpg"/></div>
                <div className="header-actions col s9 m9 l9 right-align">
                    <ul>
                        <li className="header-item-action">
                            <i className="fa fa-user"/>
                            Мій профіль
                        </li>
                        <li className="header-item-action">
                            <i className="fa fa-sign-in"/>
                            Увійти
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header
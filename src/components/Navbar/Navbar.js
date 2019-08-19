import React from 'react';

import './Navbar.css';

import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../../assets/mentorium-logo.png'
import Image from '../Image/Image';
import Link from '../Link/Link';
import SignUp from '../../pages/SignUp/SignUp';

const navbar = props => {

    let headerClasses = "toolbar";
    if (props.animation) {
        headerClasses = "toolbar scrolled";
    }

        return (
            <header className={headerClasses}>
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <DrawerToggleButton click={props.drawerClickHandler} />
                    </div>
                    <a href="/"><Image className="toolbar__logo-image" height="60px" src={Logo} navbar /></a>
                    <div className="toolbar__logo">
                        <a href="/">mentorium</a>
                    </div>
                    <div className="spacer"></div>
                    <div className="toolbar__navigation-items">
                        <ul>
                            <li><a href="/professions">Профессии</a></li>
                            <li><a href="*">Вузы</a></li>
                            <li><a href="/test">Тесты</a></li>

                        </ul>
                        <a className="toolbar__navigation-items__sign-in" href="/sign-in">Войти</a>
                    </div>
                </nav>
            </header> 
        );
    };

export default navbar;
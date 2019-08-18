import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="*">Войти</a></li>
                <li><a href="*">Начать</a></li>
                <li><a href="*">Профессии</a></li>
                <li><a href="*">Тесты</a></li>
                <li><a href="*">Вузы</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;
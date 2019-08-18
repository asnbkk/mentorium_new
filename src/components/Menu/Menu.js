import React from 'react';
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'


import { MenuStyle, MenuItemStyle ,MenuItemsStyle, MenuProfileStyle } from './MenuStyle.js'

import Text from '../Text/Text'
import Avatar from '../Avatar/Avatar'
import AvatarImg from '../../assets/avatar.png'
import Container from '../Container/Container.js'


function Menu() {

    const menuItems = [
        {
            title: 'Прогресс',
            to: '/progress',
            icon: 'chart-line'
        },
        {
            title: 'Список желаемого',
            to: '/wishes',
            icon: 'star'
        },
        {
            title: 'Университеты',
            to: '/universities',
            icon: 'university'
        },
        {
            title: 'Ивенты',
            to: '/events',
            icon: 'calendar-alt'
        },
        {
            title: 'Общение',
            to: '/community',
            icon: 'comments'
        },
        {
            title: 'Статьи',
            to: '/articles',
            icon: 'newspaper'
        },
    ]

  return (
    <MenuStyle>
        <MenuProfileStyle>
            <Avatar src={AvatarImg} />
            <Container margin={['10px', '10px', '10px', '10px']}>
                <Link to='/profile'>
                    <Text nowrap bold  inverted>
                        Абылай Махмудов
                    </Text>
                </Link>
            </Container>
        </MenuProfileStyle>
        <MenuItemsStyle>
            {menuItems.map(item => {
                return (
                    <MenuItemStyle>
                        <Text inverted>
                            <FontAwesomeIcon size="lg" icon={item.icon}/>
                        </Text>
                        <Link to={`${item.to}`}>
                            <Text nowrap inverted> 
                            {item.title} 
                            </Text>
                        </Link>
                        <Text inverted>
                            <FontAwesomeIcon size="sm" icon="chevron-right"/>
                        </Text>
                    </MenuItemStyle>
                )
            })}
        </MenuItemsStyle>
    </MenuStyle>
  );
}

export default Menu;

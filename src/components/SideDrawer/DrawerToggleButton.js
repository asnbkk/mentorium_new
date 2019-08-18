import React from 'react';

import './DrawerToggleButton.css';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <FontAwesomeIcon size='lg' icon="bars"/>
    </button>
);

export default drawerToggleButton;
import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Menu.css'

const menu = (props) => (
    <ul className="menu">
        <MenuItem link ='/' active>Services</MenuItem>
        <MenuItem link ='/'>Company</MenuItem>
    </ul>
);

export default menu;
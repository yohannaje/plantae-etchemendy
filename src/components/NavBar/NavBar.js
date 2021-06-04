import React from 'react';
import './NavBar.css';
import {CartWidget} from './CartWidget/CartWidget.js';
import {UserWidget} from './UserWidget/UserWidget.js';
import {WishWidget} from './WishWidget/WishWidget.js';
import navlogo from './logo.svg';
import navMenu from './menu.svg';

export const NavBar = () => {

    return <div className="navBar">
        <nav>
            <img src={navMenu} className="navMenu" alt="menu" />
            <img src={navlogo} className="navLogo" alt="logo" />
            <div className="navLinks">
                <ul>
                    <li>Plantas</li> 
                    <li>Tiendas</li>
                    <li>Cuidados</li>   
                </ul>
            </div>   
            <div className="navBarIcons">
                <UserWidget />
                <CartWidget />
                <WishWidget />
            </div>
        </nav>
    </div>
}
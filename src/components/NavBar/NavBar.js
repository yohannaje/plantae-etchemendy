import React from 'react';
import './NavBar.css';
import {CartWidget} from './CartWidget/CartWidget.js';
import {UserWidget} from './UserWidget/UserWidget.js';
import {WishWidget} from './WishWidget/WishWidget.js';
import navlogo from './logo.svg';
import navMenu from './menu.svg';
import {Link} from 'react-router-dom';

export const NavBar = () => {

    return <div className="navBar">
        <nav>
            <img src={navMenu} className="navMenu" alt="menu" />
            <Link to="/"><img src={navlogo} className="navLogo" alt="logo" /></Link>
            <div className="navLinks">
                <ul>
                    <li>Plantas</li> 
                    <li>Tiendas</li>
                    <li>Cuidados</li>   
                </ul>
            </div>   
            <div className="navBarIcons">
                <UserWidget />
                <CartWidget badgeNumber={3}/>
                <WishWidget />
            </div>
        </nav>
    </div>
}
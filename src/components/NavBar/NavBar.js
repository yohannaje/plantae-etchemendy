import React from 'react';
import './NavBar.css'
import navlogo from './../../../src/logo.svg';
import userIcon from './../../../src/userIcon.svg';
import cartIcon from './../../../src/cartIcon.svg';
import wishIcon from './../../../src/wishIcon.svg';
import navMenu from './../../../src/menu.svg';


export const NavBar = () => {

    return <div className="navBar">
        <nav>
            <img src={navMenu} className="navMenu" alt="menu" />
            <img src={navlogo} className="navLogo" alt="logo" />
            <div className="navLinks">
                <ul>
                    <li><a href="#">Plantas</a></li> 
                    <li><a href="#">Tiendas</a></li>
                    <li><a href="#">Cuidados</a></li>   
                </ul>
            </div>   
            <div className="navBarIcons">
                <a href="#"><img src={userIcon} alt="Mi Perfil"></img></a>
                <a href="#"><img src={cartIcon} alt="Carrito"></img></a>
                <a href="#"><img src={wishIcon} alt="Wishlist"></img></a>
            </div>
        </nav>
    
    </div>
}
import React from 'react';
import './CartWidget.css';
import cartIcon from './cartIcon.svg';

export const CartWidget = () => {

    return <div className="cartWidget">
        <img src={cartIcon} alt="Carrito"></img>
    </div>
}
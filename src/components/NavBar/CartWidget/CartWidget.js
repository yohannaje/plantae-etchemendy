import React from 'react';
import './CartWidget.css';
import {Badge} from '@material-ui/core';
import cartIcon from './cartIcon.svg';

export const CartWidget = ({badgeNumber}) => {

    return <div className="cartWidget">
        <Badge badgeContent={badgeNumber} color="primary" overlap="circle">
        
        <img src={cartIcon} alt="Carrito"></img>
        </Badge>
    </div>
}
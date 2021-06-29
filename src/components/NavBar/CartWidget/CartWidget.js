import React, {useContext,useState, useEffect} from 'react';
import './CartWidget.css';
import {Badge} from '@material-ui/core';
import cartIcon from './cartIcon.svg';
import { CartContext } from '../../CartContext';

export const CartWidget = () => {
    const {cartItems} = useContext(CartContext);
    const [badgeNumber, setBadgenumber]=useState(0)
    
    useEffect(()=>{
        cartItems.map((item, i)=>{
            setBadgenumber(+item.quantity)
        })
        
    },[cartItems])

    return <div className="cartWidget">
         
        <Badge badgeContent={badgeNumber} color="primary" overlap="circle">
        <img src={cartIcon} alt="Carrito"></img>
        </Badge>
    </div>
}
import React from 'react';
import './WishWidget.css';
import wishIcon from './wishIcon.svg';

export const WishWidget = () => {

    return <div className="wishWidget">
        <img src={wishIcon} alt="Favoritos"></img>
    </div>
}
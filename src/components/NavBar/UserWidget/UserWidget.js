import React from 'react';
import './UserWidget.css';
import userIcon from './userIcon.svg';

export const UserWidget = () => {

    return <div className="userWidget">
        <img src={userIcon} alt="Mi Perfil"></img>
    </div>
}
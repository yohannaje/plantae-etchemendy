//realizado en clase complementaria de html a jsx
//En Proceso


import React from 'react';
import {MakeStyles} from '@material-ui/core';
import {CommonComponentStyle} from './CommonComponentStyle';

export const CommonComponent = ({titulo, img, alt, buttonlabel ='volver al inicio'}) =>{
    const classes = UseStyles();
    return <section className={classes.container}>
        <div>
            <h1>{titulo}</h1>
            <img src={img} alt={alt} />
        </div>
        <button>{buttonlabel}</button>
    </section>
}
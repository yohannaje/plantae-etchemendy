import React from 'react';
//import { makeStyles,} from '@material-ui/core';
//import { ItemStyle} from './ItemStyle.js';
import {WishWidget} from '../../NavBar/WishWidget/WishWidget.js';
import {TagWidget} from '../../NavBar/TagWidget/TagWidget.js';

//const useStyles = makeStyles((theme) => ItemStyle(theme));

export const Item=({categ, img, alt, title, descr, price})=>{
   // const classes = useStyles();

    return <div className="card">

        <img src={img}alt={alt}></img>
        
        <h4>{categ}</h4>
        <h3 className="plantTitle">{title}</h3>
        <p className="descr">{descr}</p>
        <div className="pricediv">
        <TagWidget />
        <p className="price">{price}</p>
        </div>
        <div className="cardbuttons">
        <button className="buyItem">Comprar</button>
        <WishWidget />
        </div>
        
        

    </div>
}
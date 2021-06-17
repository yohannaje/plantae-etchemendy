import React from "react";
//import { makeStyles,} from '@material-ui/core';
//import { ItemStyle} from './ItemStyle.js';
import { WishWidget } from "../../NavBar/WishWidget/WishWidget.js";
import { TagWidget } from "../../NavBar/TagWidget/TagWidget.js";

//const useStyles = makeStyles((theme) => ItemStyle(theme));

export const Item = ({ item }) => {
  // const classes = useStyles();

  return (
    <div className="card">
      <img src={item.img} alt={item.alt}></img>

      <h4>{item.categ}</h4>
      <h3 className="plantTitle">{item.name}</h3>
      <p className="descr">{item.description}</p>
      <div className="pricediv">
        <TagWidget />
        <p className="price">{item.price}</p>
      </div>
      <div className="cardbuttons">
        <button className="buyItem">Comprar</button>
        <WishWidget />
      </div>

      
    </div>
  );
};

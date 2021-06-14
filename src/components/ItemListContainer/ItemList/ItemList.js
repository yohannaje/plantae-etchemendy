import React, {useEffect, useState} from 'react';
import { Item } from '../Item/Item.js';
import './Itemlist.css';


export const ItemList=({items}) => {
   
    return <div>
    {    
        items.map((item, i) =>{
            return <div key={i} className="ListContainer">
                    <Item 
                    img={item.img} 
                    title={item.name} 
                    alt={item.name}
                    categ={item.category} 
                    descr={item.description}
                    price={item.price} />
            </div>
        })
    }
    </div>
}

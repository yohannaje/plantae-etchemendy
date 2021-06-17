import React from 'react';
import { Item } from '../../Item/Item.js';
import './Itemlist.css';


export const ItemList=({items}) => {
   
    return <div>
    {    
        items.map((item, i) =>{
            return <div className="ListContainer">
                    <Item key={i} item={item} />
            </div>
        })
    }
    </div>
}

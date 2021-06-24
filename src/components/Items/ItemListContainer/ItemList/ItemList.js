import React from 'react';
import { Item } from '../../Item/Item.js';
import './Itemlist.css';

export const ItemList=({items}) => {
    //Recibo por props los items filtrados o no a mostrar.
    //Hago un map que me va a permitir recorrer el array item por item
   //y pasarselo al componente funcional Item para que los muestre
    return <div>
    {    
        items.map((item, i) =>{
            return <div key ={i}className="ListContainer">
                    <Item item={item} />
            </div>
        })
    }
    </div>
}

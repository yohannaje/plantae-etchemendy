import React from 'react';
import './ItemListContainer.css';
import { ItemList } from './ItemList/ItemList.js';


export const ItemListContainer = ({greeting}) => {

    return <div className="itemListContainer">
            <section>
                {greeting}

                <h1>Tu Planta Ideal</h1>
                <p>Encontra la planta que buscas segun las condiciones 
                de tu espacio, <br></br> filtra por tipo, especie y necesidad</p>

            </section>
         <ItemList />   

    
    </div>
}
import React,{useEffect,useState} from 'react';
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList.js'


export const ItemListContainer = ({greeting}) => {

    const getItems = () =>{
        return new Promise ((resolve, reject) =>{

            setTimeout(()=> resolve(
            [{id:1, 
            img: 'https://images.unsplash.com/photo-1594908629102-237d9c0f9594?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Senecio peregrinus', 
            stock: true, 
            category:'Cactus',
            description: 'Se trata de plantas muy resistentes con capacidad para almacenar agua en sus hojas.', 
            price:'$250'},
            {
            id:2, 
            img: 'https://images.unsplash.com/photo-1621778764188-bf87fbb77c7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Rhipsalis cereuscula', 
            stock: true, 
            category:'Cactus',
            description: 'Se trata de un cactus carente de espinas que en su hábitat natural prospera sobre árboles.', 
            price:'$250'},
            {
            id:3, 
            img: 'https://images.unsplash.com/photo-1564335375227-9983c3898775?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Kalanchoe', 
            stock: true, 
            category:'Cactus',
            description: 'Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.', 
            price:'$250'},
            {id:4, 
            img: 'https://images.unsplash.com/photo-1596732402501-9e5d6d62b13e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Kalanchoe', 
            stock: true, 
            category:'Cactus',
            description: 'Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.', 
            price:'$250'}
            ]

            ),2000)
        })
    }

    const [items, setItems] = useState([]);

    useEffect(()=>{
        getItems().then(data =>{
            setItems(data)})
    },[])


    return <div className="itemListContainer">
            <section>
                {greeting}

                <h1>Tu Planta Ideal</h1>
                <p>Encontra la planta que buscas segun las condiciones 
                de tu espacio, <br></br> filtra por tipo, especie y necesidad</p>

            </section>


         <ItemList items={items}/>   

    
    </div>
}
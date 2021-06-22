import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader.js";

export const ItemDetailContainer = () => {
  
  const [prodById, setProdById] = useState({});
  const { id } = useParams();
  const getAllProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve(
            [{id:'1', 
            img: 'https://images.unsplash.com/photo-1594908629102-237d9c0f9594?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Senecio peregrinus', 
            stock: true, 
            category:'cactus',
            description: 'Se trata de plantas muy resistentes con capacidad para almacenar agua en sus hojas.', 
            price:'$250'},
            {
            id:'2', 
            img: 'https://images.unsplash.com/photo-1621778764188-bf87fbb77c7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Rhipsalis cereuscula', 
            stock: true, 
            category:'interior',
            description: 'Se trata de un cactus carente de espinas que en su hábitat natural prospera sobre árboles.', 
            price:'$250'},
            {
            id:'3', 
            img: 'https://images.unsplash.com/photo-1564335375227-9983c3898775?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Kalanchoe', 
            stock: true, 
            category:'exterior',
            description: 'Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.', 
            price:'$250'},
            {id:'4', 
            img: 'https://images.unsplash.com/photo-1596732402501-9e5d6d62b13e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Kalanchoe', 
            stock: true, 
            category:'interior',
            description: 'Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.', 
            price:'$250'},
            {
            id:'5', 
            img: 'https://images.unsplash.com/photo-1594908629102-237d9c0f9594?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Senecio peregrinus', 
            stock: true, 
            category:'cactus',
            description: 'Se trata de plantas muy resistentes con capacidad para almacenar agua en sus hojas.', 
            price:'$250'},
            {
            id:'6', 
            img: 'https://images.unsplash.com/photo-1621778764188-bf87fbb77c7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Rhipsalis cereuscula', 
            stock: true, 
            category:'exterior',
            description: 'Se trata de un cactus carente de espinas que en su hábitat natural prospera sobre árboles.', 
            price:'$250'},
            {
            id:'7', 
            img: 'https://images.unsplash.com/photo-1564335375227-9983c3898775?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Kalanchoe', 
            stock: true, 
            category:'interior',
            description: 'Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.', 
            price:'$250'},
            {
            id:'8', 
            img: 'https://images.unsplash.com/photo-1596732402501-9e5d6d62b13e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Kalanchoe', 
            stock: true, 
            category:'cactus',
            description: 'Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.', 
            price:'$250'}
            ]
          ),
        2000
      );
    });
  };

  useEffect(() => {
    getAllProducts().then((data) => {
      setProdById(data.find(prod => prod.id === id));
    });
  }, []);

  return  <section className="detailContainer">
	{ Object.keys(prodById).length === 0 ? (
    <div className="LoaderContainer">
      <Loader/>
    </div>
    ):(<ItemDetail product={prodById} />)
	
  }
 </section>

};


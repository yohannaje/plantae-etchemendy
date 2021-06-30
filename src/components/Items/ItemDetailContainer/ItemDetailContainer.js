import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader.js";
import {dataBase} from "../../../Firebase/firebase.js"

export const ItemDetailContainer = () => {
  //utilizao useState para registrar y mostrar los cambios en pantalla.
  const [prodById, setProdById] = useState({});
  //obtengo un valor id por useParams para poder capturar la ruta a mostrar
  const { id } = useParams();
  //Creo una funcion para obtener mis datos, los cuales se resuelven en una
  //promise con timeOut para emular el backend.
  const getAllProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve(
            [
            {id:'1', 
            img: 'https://images.unsplash.com/photo-1594908629102-237d9c0f9594?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Senecio peregrinus', 
            stock: 10, 
            min:1,
            category:'cactus',
            description: 'Se trata de plantas muy resistentes con capacidad para almacenar agua en sus hojas.', 
            price:250},
            {
            id:'2', 
            img: 'https://images.unsplash.com/photo-1621778764188-bf87fbb77c7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Rhipsalis cereuscula', 
            stock: 5, 
            min:1,
            category:'interior',
            description: 'Se trata de un cactus carente de espinas que en su hábitat natural prospera sobre árboles.', 
            price:250},
            {
            id:'3', 
            img: 'https://images.unsplash.com/photo-1564335375227-9983c3898775?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Kalanchoe', 
            stock: 6, 
            min:1,
            category:'exterior',
            description: 'Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.', 
            price:250},
            {id:'4', 
            img: 'https://images.unsplash.com/photo-1596732402501-9e5d6d62b13e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Kalanchoe', 
            stock: 4, 
            min:1,
            category:'interior',
            description: 'Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.', 
            price:250},
            {
            id:'5', 
            img: 'https://images.unsplash.com/photo-1594908629102-237d9c0f9594?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Senecio peregrinus', 
            stock: 9, 
            min:1,
            category:'cactus',
            description: 'Se trata de plantas muy resistentes con capacidad para almacenar agua en sus hojas.', 
            price:250},
            {
            id:'6', 
            img: 'https://images.unsplash.com/photo-1621778764188-bf87fbb77c7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Rhipsalis cereuscula', 
            stock: 20, 
            min:1,
            category:'exterior',
            description: 'Se trata de un cactus carente de espinas que en su hábitat natural prospera sobre árboles.', 
            price:250},
            {
            id:'7', 
            img: 'https://images.unsplash.com/photo-1564335375227-9983c3898775?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Kalanchoe', 
            stock: 2, 
            min:1,
            category:'interior',
            description: 'Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.', 
            price:250},
            {
            id:'8', 
            img: 'https://images.unsplash.com/photo-1596732402501-9e5d6d62b13e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            name: 'Kalanchoe', 
            stock: 8, 
            min:1,
            category:'cactus',
            description: 'Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.', 
            price:250}
            ]
          ),
        2000
      );
    });
  };

  //utilizo UseEffect para simplificar lo que tengo que hacer
  //primero llamo a la funcion que tiene la promise y utilizo .then para el caso de exito
  //luego al resultado de la promise (mi array de objetos), lo paso
  //como parametro a mi funcion de estado setProdById pero ya filtrados por
  //el valor de Id que tome de useParams, de esta manera ya mando directamente
  //el item que necesito mostrar, y es el unico que se guarda en mi constante
  //de estado.

  useEffect(() => {
    getAllProducts().then((data) => {
      setProdById(data.find(prod => prod.id === id));
    });
  }, []);

  //Para poder mostrar el loader y evaluar si mi objeto estaba inicializado (vacio)
  //al principio de la carga de la pagina, utilice la funcion Object.keys
  //si el valor es 0, o sea que no tiene nada, muestro el loader.
  //de lo contrario paso el producto a ItemDetail para que lo renderize.
  
  return  <section className="detailContainer">
	{ Object.keys(prodById).length === 0 ? (
    <div className="LoaderContainer">
      <Loader/>
    </div>
    ):(<ItemDetail product={prodById} />)
	
  }
 </section>

};


import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "./ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader.js";

export const ItemListContainer = () => {
  //Obtengo el valor de la categoria en la que estoy con useParams()
  const { id } = useParams();
  //utilizo UseState para controlar los cambios en pantalla
  //lo inicializo en [] ya que va a contener un array con
  //mis objetos -> items a vender
  const [items, setItems] = useState([]);
  //Creo una funcion getItems que crea una promise donde  
  //se obtienen mis datos, y la resuelvo con un
  //setTimeOut para emular el pedido al backend

  const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve([
            {
              id: "1",
              img: "https://images.unsplash.com/photo-1594908629102-237d9c0f9594?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
              name: "Senecio peregrinus",
              stock: true,
              category: "cactus",
              description:
                "Se trata de plantas muy resistentes con capacidad para almacenar agua en sus hojas.",
              price: "$250",
            },
            {
              id: "2",
              img: "https://images.unsplash.com/photo-1621778764188-bf87fbb77c7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
              name: "Rhipsalis cereuscula",
              stock: true,
              category: "interior",
              description:
                "Se trata de un cactus carente de espinas que en su hábitat natural prospera sobre árboles.",
              price: "$250",
            },
            {
              id: "3",
              img: "https://images.unsplash.com/photo-1564335375227-9983c3898775?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
              name: "Kalanchoe",
              stock: true,
              category: "exterior",
              description:
                "Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.",
              price: "$250",
            },
            {
              id: "4",
              img: "https://images.unsplash.com/photo-1596732402501-9e5d6d62b13e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
              name: "Kalanchoe",
              stock: true,
              category: "interior",
              description:
                "Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.",
              price: "$250",
            },
            {
              id: "5",
              img: "https://images.unsplash.com/photo-1594908629102-237d9c0f9594?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
              name: "Senecio peregrinus",
              stock: true,
              category: "cactus",
              description:
                "Se trata de plantas muy resistentes con capacidad para almacenar agua en sus hojas.",
              price: "$250",
            },
            {
              id: "6",
              img: "https://images.unsplash.com/photo-1621778764188-bf87fbb77c7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
              name: "Rhipsalis cereuscula",
              stock: true,
              category: "exterior",
              description:
                "Se trata de un cactus carente de espinas que en su hábitat natural prospera sobre árboles.",
              price: "$250",
            },
            {
              id: "7",
              img: "https://images.unsplash.com/photo-1564335375227-9983c3898775?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
              name: "Kalanchoe",
              stock: true,
              category: "interior",
              description:
                "Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.",
              price: "$250",
            },
            {
              id: "8",
              img: "https://images.unsplash.com/photo-1596732402501-9e5d6d62b13e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhY3R1c3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
              name: "Kalanchoe",
              stock: true,
              category: "cactus",
              description:
                "Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m.",
              price: "$250",
            },
          ]),
        2000
      );
    });
  };

 //uso useEffect para guardar los datos en mi variable de estado
 //llamo a getItems y utilizo .then porque me interesa el caso en que 
 //la promise se resolvio correctamente.

  useEffect(() => {
    getItems().then((data) => {
      setItems(data);
    });
  }, [id]); //aca utilizo ID para que se dispare useEffect cada vez que
  //mi valor id (obtenido por useparams) cambie, o sea cada vez que 
  //tenga que cargar otra categoria.

  //en el return evaluo si mi array items (con mis objetos) tiene algo
  //o si solo esta inicializado, en el caso de tener contenido evaluo
  //si id es undefined (el caso de estar en el home localhost:3000/)
  //si id no es undefined (o sea, estoy yendo a una ruta)filtro los productos
  // por la categoria correspondiente. Y se los paso a ItemList ya filtrados
  // En el caso de que el array este vacio cargo un loader hasta que tenga algo.

  return (
    <>
      <div className="itemListContainer">
        <section>
          <h1>Tu Planta Ideal</h1>
          <p>
            Encontra la planta que buscas segun las condiciones de tu espacio,{" "}
            <br></br> filtra por tipo, especie y necesidad
          </p>
        </section>
        {items.length > 0 ? (
          id === undefined ? (
            <ItemList items={items} />
          ) : (
            <ItemList items={items.filter((item) => item.category === id)} />
          )
        ) : (
          <div className="LoaderContainer">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

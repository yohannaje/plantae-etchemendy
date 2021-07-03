import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "./ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader.js";
import { dataBase } from "../../../Firebase/firebase.js"

export const ItemListContainer = () => {
  //Obtengo el valor de la categoria en la que estoy con useParams()
  const { id } = useParams();
  //utilizo UseState para controlar los cambios en pantalla
  //lo inicializo en [] ya que va a contener un array con
  //mis objetos -> items a vender
  const [items, setItems] = useState([]);
 
  useEffect(() => {
    const itemCollection = dataBase.collection("items");
    itemCollection.get().then((response)=>{
      if(response.size===0){
        console.log("no results");
      }
      const ItemsDB = response.docs.map(element=>{
        return {...element.data(), id:element.id};
      });
      setItems(ItemsDB);
    })
  }, [id]); 
  
  //aca utilizo ID para que se dispare useEffect cada vez que
  //mi valor id (obtenido por useparams) cambie, o sea cada vez que 
  //tenga que cargar otra categoria.

  //en el return evaluo si mi array items (con mis objetos) tiene algo
  //o si solo esta inicializado, en el caso de tener contenido evaluo
  //si id es undefined (el caso de estar en el home localhost:3000/), 
  //si es asi cargo todos los items a mostrar.
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

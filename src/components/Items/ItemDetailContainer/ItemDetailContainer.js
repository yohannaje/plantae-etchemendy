import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader.js";
import {dataBase} from "../../../Firebase/firebase.js"
import { SettingsRemoteSharp } from "@material-ui/icons";

export const ItemDetailContainer = () => {
  //utilizao useState para registrar y mostrar los cambios en pantalla.
  const [prodById, setProdById] = useState({});
  //obtengo un valor id por useParams para poder capturar la ruta a mostrar
  const { id } = useParams();
  //Creo una funcion para obtener mis datos, los cuales se resuelven en una
  //promise con timeOut para emular el backend.
  


  useEffect(() => {
    const itemCollection = dataBase.collection("items");
    const item = itemCollection.doc(id);

    item.get().then((doc)=>{
      if(!doc.exists){
        console.log('item doesnt exist');
      }
      setProdById({id: doc.id, ...doc.data()})
    })
    
   
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


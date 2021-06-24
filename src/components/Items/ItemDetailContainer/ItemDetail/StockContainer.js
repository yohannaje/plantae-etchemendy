import {React, useState} from 'react';
import { ItemCount } from "../../ItemCount/ItemCount.js";
import { Link } from "react-router-dom";

export const StockContainer = () =>{
  //este componente basicamente muestra el contador de productos 
  //cuando la variable de estado esta en falso, esto quiere decir que no 
  //estoy yendo a Finalizar la compra, cuando clickeo en agregar al carrito
  // cambio la variable a true, lo que significa que tengo que mostrar
  //el otro boton y dejar de mostrar el contador

  const [buttonState, setButtonState]= useState(false)
  
  return ( buttonState === false ? (
    <div className="stockContainer">
      <ItemCount currentstock={5} initial={1}/>
      <button className="addCartButton" onClick={(e) => setButtonState(true)}>Agregar al carrito</button>
    </div>
    ) : (
      <div>
      <Link to="/cart"><button className="purchaseButton">Finalizar Compra</button></Link>
      <br></br>
      <button className="backButton" onClick={(e) => setButtonState(false)}>Cancelar</button>
      </div>
    )
    )
  }
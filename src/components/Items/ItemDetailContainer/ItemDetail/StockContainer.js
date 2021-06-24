import {React, useState} from 'react';
import { ItemCount } from "../../ItemCount/ItemCount.js";
import { Link } from "react-router-dom";



export const StockContainer = () =>{
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
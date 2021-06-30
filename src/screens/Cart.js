import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext.js';
import { Link } from 'react-router-dom';
import './Cart.css';

export const Cart =() =>{
const {cartItems} = useContext(CartContext);
const {removeItem} = useContext(CartContext);
const {addItem} = useContext(CartContext);


const itemsQty = cartItems.reduce((a,c)=> a +c.quantity, 0)
const itemsPrice = cartItems.reduce((a,c)=> a + c.item.price * c.quantity, 0)
 return <div className="cartContainer">
    <h1>Mi Carrito</h1>
    <div>{cartItems.length=== 0 && 
        <div>El carrito esta vacio
        <Link to="/">
            <button className="backButton">Volver al Inicio</button>
          </Link> 
        </div>
        }
    </div>
    
    {cartItems.map((productos)=>(
        <div key={productos.item.id}>
         <h4>{productos.item.name}</h4> 
         <button onClick={(e)=>removeItem(productos)}>Eliminar Producto</button>
         <button onClick={(e)=>addItem(productos.item,1)}>Agregar uno</button>
         <p> ${productos.item.price}</p> 
         <p> x {productos.quantity}</p> 
         <h4>{productos.item.price * productos.quantity}</h4>
         </div>
         
    ))
      
    }
    
    <div>{cartItems.length > 0 && 
        <div>
            <h1>Total</h1>
            <p> {itemsPrice}</p>
            <h3> Cant de Items </h3>
            <p>{itemsQty}</p>
        </div>
    }
    </div>
    
    
  
 </div>  
}
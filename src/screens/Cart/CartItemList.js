import {React} from 'react';
import deleteIcon from "./delete.svg";


export const CartItemList=({cartItems, removeItem}) => {
  
    return <div className="cartItemList">
    {cartItems.map((products, i) => (
      <div key={i} className="itemRow">
        <div className="deleteCartItem">
          <button onClick={(e) => removeItem(products)}>
            <img src={deleteIcon} alt="delete icon"></img>
          </button>
        </div>
        <div className="itemImage">
          <img src={products.item.img} alt={products.item.alt}></img>
        </div>
        <div className="itemTitle">
          <h4>{products.item.name}</h4>
          <p>Precio Unitario: ${products.item.price}</p>
          <p>Cantidad: {products.quantity}</p>
        </div>
        
        <div className="subtotal">
        <p>${products.item.price * products.quantity}</p>
        </div>
      </div>
    ))}
  </div>
}
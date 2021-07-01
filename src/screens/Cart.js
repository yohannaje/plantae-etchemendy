import React, { useContext } from "react";
import { CartContext } from "../components/CartContext.js";
import { Link } from "react-router-dom";
import "./Cart.css";
import deleteIcon from "../components/delete.svg";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);

  const itemsQty = cartItems.reduce(
    (total, products) => total + products.quantity,
    0
  );
  const itemsPrice = cartItems.reduce(
    (total, products) => total + products.item.price * products.quantity,
    0
  );

  return (
    <div className="cartContainer">
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <img
            src="https://image.freepik.com/free-vector/add-cart-concept-illustration_114360-2521.jpg"
            alt="carrito vacio"
          ></img>
          <h1>El Carrito está vacio</h1>
          <Link to="/">
            <button>Volver al Home</button>
          </Link>
        </div>
      ) : (
        <div className="cartContent">
          <h1 className="cartTitle">Mi Carrito</h1>
          <div className="cartItemList">
            {cartItems.map((products, i) => (
              <div key={i} className="itemRow">
                <div className="deleteCartItem">
                  <button onClick={(e) => removeItem(products)}>
                    <img src={deleteIcon} alt="delete icon"></img>
                  </button>
                </div>
                <div className="cartImageText">
                  <img src={products.item.img} alt={products.item.alt}></img>
                </div>
                <div className="itemTitle">
                  <h4>{products.item.name}</h4>
                </div>
                
                <div className="subtotal">
                <p>x {products.quantity}</p>
                <p>=${products.item.price * products.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cartTotal">
            <h2>Total</h2>
            <div><p>Productos: {itemsQty}</p>
            <p>Costo Final: ${itemsPrice}</p></div>
            <button>Comprar</button>
          </div>
        </div>
      )}
    </div>
  );
};

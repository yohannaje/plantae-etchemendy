import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext.js";
import { Form } from "./Form.js";
import { CartItemList } from "./CartItemList.js";
import { EmptyPageComponent } from "../../components/EmptyPageComponent/EmptyPageComponent.js";
import { Footer } from "../../components/Footer/Footer.js";
import "./Cart.css";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { clear } = useContext(CartContext);

  const itemsQty = cartItems.reduce(
    (total, products) => total + products.quantity,
    0
  );
  const itemsPrice = cartItems.reduce(
    (total, products) => total + products.item.price * products.quantity,
    0
  );

  return <div className="cartContainer">
      {cartItems.length === 0 ? (
        <EmptyPageComponent
          imgUrl="https://i.ibb.co/GtP10nd/Add-to-Cart-cuate.png"
          altText="carrito vacio"
          h1="El Carrito está vacio"
          link="/"
          btnText="Volver al Home"
        />
      ) : (
        <div className="cartContent">
          <section className="cartDetail">
            <h1>Mi Carrito</h1>
            <CartItemList cartItems={cartItems} removeItem={removeItem} />
            <div className="cartTotal">
              <h2>Total</h2>
              <p>
                <b>Cantidad de productos:</b> {itemsQty}
              </p>
              <p>
                <b>Costo Final:</b> ${itemsPrice}
              </p>
              <p>
                <b>Envio:</b> Gratis
              </p>
            </div>
          </section>
          <section className="purchase">
            <div className="userInfo">
              <h2>Mis Datos</h2>
              <Form
                cartItems={cartItems}
                itemsPrice={itemsPrice}
                clear={clear}
              />
            </div>
          </section>
        </div>
      )}
      <Footer />
    </div>
};

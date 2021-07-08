import React, { useContext,useState } from "react";
import { CartContext } from "../components/CartContext.js";
import { Link } from "react-router-dom";
import "./Cart.css";
import deleteIcon from "../components/delete.svg";
import { Form } from "../components/Form/Form.js";
import {dataBase} from "../Firebase/firebase.js";
import firebase from 'firebase/app';
import 'firebase/firestore';


export const Cart = () => {
  const [items,setItems]=useState([]);
  const [buyer,setBuyer]= useState([]);
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

 
    
  


  const createOrder = () => {

    const itemsToUpdate = dataBase.collection("items")
      .where(firebase.firestore.FieldPath.documentId(), 'in', cartItems.map(i => i.item.id));
    
  
    itemsToUpdate.get().then(querySnapshot => {
      const batch = dataBase.batch();
      const outOfStock = [];
  
      querySnapshot.docs.forEach((docSnapshot, idx) => {
        if (docSnapshot.data().stock >= cartItems[idx].quantity) {
          batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cartItems[idx].quantity });
        } else {
          outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
        }
      })
  
      if (outOfStock.length === 0) {
        const newOrderReference = dataBase.collection("orders").doc();
        
        const orderItems = cartItems.map((item) =>{
          return {
          id: item.item.id,
          title: item.item.name,
          price: item.item.price,
          qty:item.quantity
        }  
      });
      setItems(orderItems);
        
        batch.set(newOrderReference, {
          buyer:buyer,
          items: items,
          date: firebase.firestore.Timestamp.fromDate(new Date()),
          total: itemsPrice
        })
        batch.commit().then(() => {
          dataBase.collection("orders")
            .orderBy('date', "desc").limit(1)
            .get().then(querySnapshot => console.log(querySnapshot.docs[0].id))
        });
      }
    }
    )
  }

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
          <section className="purchase">
          <div className="userInfo">
          <h2>Mis Datos</h2>
          <Form setBuyer={setBuyer}/>
          {console.log(buyer)}
          </div>
          <div className="cartTotal">
            <h2>Total</h2>
            <p>Cantidad de productos: {itemsQty}</p>
            <p>Costo Final: ${itemsPrice}</p>
            <p>Envio: Gratis</p>
            <button onClick={(e) => createOrder()}>Finalizar Compra</button>
          </div>
          </section>
        </div>
      )}
    </div>
  );
};


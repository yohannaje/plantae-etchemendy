import { React,useContext,useState } from "react";
import "./ItemDetail.css";
import { TagWidget } from "../../../components/NavBar/TagWidget/TagWidget.js";
import { Link } from "react-router-dom";
import {ItemCount} from "../../../components/Items/ItemCount/ItemCount.js";
import {CartContext} from "../../Cart/CartContext.js";

export const ItemDetail = ({ product }) => {
  const [endPurchase, showEndPurchase]=useState(false);
  const { addItem } = useContext(CartContext);
  const onAdd = (cantItems) => {
  showEndPurchase(true);
  addItem(product, cantItems)
  }
  return (
    <article className="productDetail">
      <img className="prodimg" src={product.img} alt={product.alt} />
      <div className="prodinfo">
        <Link to={`/categories/${product.category}`}>
          <h4>{product.category}</h4>
        </Link>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="pricediv">
          <TagWidget />
          <h5>${product.price}</h5>
        </div> 
        {endPurchase?(
          <div className="stockContainer">
          <Link to="/cart">
            <button className="purchaseButton">Finalizar Compra</button>
          </Link>
          <br></br>
          <button className="backButton" onClick={(e) => showEndPurchase(false)}>
            Atras
          </button>
        </div>
        ):(<div>
        <ItemCount currentstock={product.stock} initial={product.min} onAdd={onAdd}/> 
          </div>
        )
        }
      </div>
      
    </article>
  );
};

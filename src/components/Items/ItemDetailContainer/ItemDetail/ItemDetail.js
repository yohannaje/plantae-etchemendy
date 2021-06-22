import { React } from "react";
import { ItemCount } from "../../ItemCount/ItemCount.js";
import "./ItemDetail.css";
import { TagWidget } from "../../../NavBar/TagWidget/TagWidget.js";
import { Link } from "react-router-dom";

export const ItemDetail = ({ product }) => {
  return (
    <article className="productDetail">
      <img className="prodimg" src={product.img} alt={product.alt} />
      <div className="prodinfo">
        <Link to={`/category/${product.category}`}><h4>{product.category}</h4></Link>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="pricediv">
        <TagWidget />
        <h5>{product.price}</h5>
        </div>
        <ItemCount stock={5} initial={1} />
      </div>
    </article>
  );
};

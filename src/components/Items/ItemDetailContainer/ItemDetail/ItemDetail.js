import { React } from "react";
import { ItemCount } from "../../ItemCount/ItemCount.js";
import "./ItemDetail.css";
import { TagWidget } from "../../../NavBar/TagWidget/TagWidget.js";
import { Link } from "react-router-dom";

export const ItemDetail = ({ product }) => {
  //este componente tambien es dummy por lo que recibe
  //solamente el producto ya filtrado por el id
  //lo unico que le agregue aca fue un link a la categoria
  //por si se quiere navegar desde el detalle a otros productos similares.

  //tambien renderizo el contador, con los valores iniciales y de stock harcodeados.
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

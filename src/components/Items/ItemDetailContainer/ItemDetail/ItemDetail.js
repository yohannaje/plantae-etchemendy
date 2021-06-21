import {React} from "react";
import { ItemCount } from "../../ItemCount/ItemCount.js";
import "./ItemDetail.css";

export const ItemDetail = ({product}) => {
  
  console.log(product)

  return   <article className="productDetail">  
    <ItemCount stock={5} initial={1} />
</article>

  
};

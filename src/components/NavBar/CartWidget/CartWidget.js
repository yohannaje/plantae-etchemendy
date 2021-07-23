import React, { useContext } from "react";
import { Badge } from "@material-ui/core";
import { CartContext } from "../../../screens/Cart/CartContext.js";
import { Link } from "react-router-dom";
import cartIcon from "./cartIcon.svg";
import "./CartWidget.css";


export const CartWidget = () => {
  const { cartTotal } = useContext(CartContext);

  return <div className="cartWidget">
      <Link to="/cart">
        <Badge badgeContent={cartTotal} color="primary" overlap="circle">
          <img src={cartIcon} alt="Carrito"></img>
        </Badge>
      </Link>
    </div>
};

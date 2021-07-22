import React, { useContext, useState, useEffect } from "react";
import { Badge } from "@material-ui/core";
import { CartContext } from "../../../screens/Cart/CartContext.js";
import { Link } from "react-router-dom";
import cartIcon from "./cartIcon.svg";
import "./CartWidget.css";


export const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const [badgeNumber, setBadgeNumber] = useState(0);

  useEffect(() => { // eslint-disable-line react-hooks/exhaustive-deps
    setBadgeNumber(cartItems.reduce((a, c) => a + c.quantity, 0));
  });

  return <div className="cartWidget">
      <Link to="/cart">
        {" "}
        <Badge badgeContent={badgeNumber} color="primary" overlap="circle">
          <img src={cartIcon} alt="Carrito"></img>
        </Badge>
      </Link>
    </div>
};

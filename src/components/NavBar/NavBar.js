import React from "react";
import "./NavBar.css";
import { CartWidget } from "./CartWidget/CartWidget.js";
import { UserWidget } from "./UserWidget/UserWidget.js";
import { WishWidget } from "./WishWidget/WishWidget.js";
import navlogo from "./logo.svg";
import { Link } from "react-router-dom";

export const NavBar = ({ id }) => {
  return (
    <div className="navBar">
      <nav>
        <Link to="/">
          <img src={navlogo} className="navLogo" alt="logo" />
        </Link>
        <div className="navLinks">
          <ul>
            <li>
              <Link to={"/category/cactus"}>Cactus</Link>
            </li>
            <li>
              <Link to={"/category/interior"}>Interior</Link>
            </li>
            <li>
              <Link to={"/category/exterior"}>Exterior</Link>
            </li>
          </ul>
        </div>
        <div className="navBarIcons">
          <UserWidget />
          <CartWidget />
          <WishWidget />
        </div>
      </nav>
    </div>
  );
};

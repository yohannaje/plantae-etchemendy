import React from "react";
import "./NavBar.css";
import { CartWidget } from "./CartWidget/CartWidget.js";
import { UserWidget } from "./UserWidget/UserWidget.js";
import { WishWidget } from "./WishWidget/WishWidget.js";
import navlogo from "./logo.svg";
import { Link, NavLink } from "react-router-dom";

export const NavBar = ({ id }) => {
  return <div className="navBar">
      <nav>
        <Link to="/">
          <img src={navlogo} className="navLogo" alt="logo" />
        </Link>
        <div className="navLinks">
          <ul>
            <li>
              <NavLink activeStyle={{ color:'#6ebdaa' }}to={"/categories/cactus"}>Cactus</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color:'#6ebdaa' }}to={"/categories/interior"}>Interior</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color:'#6ebdaa' }}to={"/categories/exterior"}>Exterior</NavLink>
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
};

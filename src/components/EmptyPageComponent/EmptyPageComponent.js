import React from "react";
import { Link } from "react-router-dom";
import "./EmptyPageComponent.css";

export const EmptyPageComponent = (props) => {
  return <>
      <div className="emptyPage">
        <img src={props.imgUrl} alt={props.altText}></img>
        <h1>{props.h1}</h1>
        <p>{props.extraInfo}</p>
        <Link to={props.link}>
          <button>{props.btnText}</button>
        </Link>
      </div>
    </>
};

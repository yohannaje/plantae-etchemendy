import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { itemCountStyle } from "./itemCountStyle";

const useStyles = makeStyles((theme) => itemCountStyle(theme));

export const ItemCount = ({ currentstock, initial, onAdd, handleIncrement }) => {
  const classes = useStyles();
  const [count, setCount] = useState(initial);
 

  handleIncrement = () => {
    if (currentstock > 0 && count < currentstock) {
     
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }; 
  return <div className={classes.counterGroup}>
      <Button onClick={(e) => handleDecrement()} className={classes.button}>
        {" "}
        -{" "}
      </Button>
      <Button disabled className={classes.buttonCounter}>
        {count}
      </Button>
      <Button onClick={(e) => handleIncrement()} className={classes.button}>
        {" "}
        +{" "}
      </Button>
      <button className="addCartButton" onClick={(e) => onAdd(count)}>Agregar al carrito</button>
    </div>
};

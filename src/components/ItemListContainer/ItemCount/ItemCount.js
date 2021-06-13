import React, {useState} from 'react';
import {makeStyles, Button} from '@material-ui/core';
import {itemCountStyle} from './itemCountStyle';


const useStyles = makeStyles((theme) => itemCountStyle(theme));

export const ItemCount = ({stock, initial, handleIncrement}) => {
    const classes = useStyles();
    const [count,setCount] = useState(initial); 
    //contador inicializado en valor inicial

    handleIncrement = () => {
        if (stock > 0 && count < stock){ 
            //si hay stock y el valor elegido por el usuario es menor que el stock
        setCount(count + 1); //sumar uno al contador (el maximo sera igual al stock disponible)
        
        } 
    } 

    const handleDecrement = () => {
        if (count > 1){
            setCount (count-1);
        }
    } //decrementa de a uno en el contador excepto cuando el valor es 1.
        
    return <div className={classes.counterGroup}>
        <Button onClick={ e => handleDecrement()} className={classes.button}> - </Button>
        <Button disabled className={classes.buttonCounter}>{count}</Button>
        <Button onClick={ e => handleIncrement()} className={classes.button}> + </Button>
        
    </div>
      

}
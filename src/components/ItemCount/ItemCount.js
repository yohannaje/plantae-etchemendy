import React, {useState} from 'react';
import {makeStyles, Button} from '@material-ui/core';
import {itemCountStyle} from './itemCountStyle';


const useStyles = makeStyles((theme) => itemCountStyle(theme));

export const ItemCount = props => {
    const classes = useStyles();
    const [count,setCount] = useState(1); 
    //contador inicializado en 1 (minimo un producto)

    const handleIncrement = () => {
        setCount(count +1);
    } //incrementa de a uno en el contador

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
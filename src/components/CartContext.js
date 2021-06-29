import { React, useState,createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider=({children})=>{
const [cartItems, setCartItems] = useState([]);

function addItem(product, cantItems){
//busco si el id del producto a agregar ya esta en el carrito
//si me retorna true es porque esta entonces solo tengo que
//actualizarle la cantidad de items.

    if (isInCart(product.id)){

        console.log(`esta es la cantidad a agregar ${cantItems}`)
        updateItem(cantItems)
    }else
//si me retorna undefined es que en realidad no esta y por ende
//lo tengo que agregar. Creo el objeto con el item y la cantidad 
//y lo agrego a mi array del carrito
    {
    const itemToAdd = {
        item:product,
        quantity:cantItems
    }
        setCartItems([...cartItems, itemToAdd]) 
        console.log(cartItems)
    }
}

//para remover un item, filtro todos los items distintos al producto
// y creo un nuevo array sin ese producto en el.
//actualizo mi array del carrito oficial por el array filtrado

const removeItem=(product)=>{
const updatedCartItems = cartItems.filter((item) => item !== product);
setCartItems(updatedCartItems);

}

//limpio el carrito seteandolo nuevamente en array vacio
const clear=()=>{
    setCartItems([]);
}


//A itemUpdate le paso la cantidad de items que voy a agregar para directamente tener
//el valor que necesito actualizar
//con un foreach encuentro el indice y lo actualizo con la nueva cantidad.

const updateItem = (cantItems) => {
const updatedCart = cartItems.forEach((cartItem, index) =>{
    cartItems[index].quantity = cartItems[index].quantity + cantItems
    console.log(cartItem)
})
    console.log(cartItems)
}
// A isInCart le paso el ID del producto que voy a agregar
//busco el ID del item en el cart, si me retorna algo truthy que no es undefined es porque existe

const isInCart=(id)=>{
    const foundItem = cartItems.find(product=> product.item.id === id)
    console.log(foundItem)
    return foundItem 
}

return <CartContext.Provider value={{addItem, removeItem, clear, cartItems}}>
    {children}
</CartContext.Provider>
}

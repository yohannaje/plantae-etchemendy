import { React, useState, useEffect, createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

  function addItem(product, cantItems) {
    if (isInCart(product.id)) {
      updateItem(product.id, cantItems);
    } else {
      const itemToAdd = {
        item: product,
        quantity: cantItems,
      };
      setCartItems([...cartItems, itemToAdd]);
    }
  }

  const removeItem = (product) => {
    const updatedCartItems = cartItems.filter((item) => item !== product);
    setCartItems(updatedCartItems);
  };

  const clear = () => {
    setCartItems([]);
  };

  const updateItem = (id, cantItems) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.item.id === id) {
        return {
          ...item,
          quantity: item.quantity + cantItems,
        };
      } else {
        return null;
      }
    });
    setCartItems(updatedCartItems);
  };

  const isInCart = (id) => {
    const foundItem = cartItems.find((product) => product.item.id === id);
    return foundItem;
  };

  const calculateCartTotal = () => {
		const total = cartItems.reduce((total,items)=> total + items.quantity, 0)
		return total;
	};

  useEffect(() => {
			const quantity = calculateCartTotal();
			setCartTotal(quantity);

	}, [cartItems]);// eslint-disable-line react-hooks/exhaustive-deps

  return <CartContext.Provider
      value={{ addItem, updateItem, removeItem, clear, cartItems, cartTotal}}
    >
      {children}
    </CartContext.Provider>
};

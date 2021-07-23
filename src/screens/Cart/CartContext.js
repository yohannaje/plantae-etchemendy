import { React, useState, useEffect, createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0)

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

  const itemsQty = cartItems.reduce(
    (total, products) => total + products.quantity,
    0
  );
  const itemsPrice = cartItems.reduce(
    (total, products) => total + products.item.price * products.quantity,
    0
  );

  const calculateCartTotal = () => {
		const total = cartItems.reduce((summatory, items) => {
			return summatory + items.quantity;
		}, 0);
		return total;
	};

  useEffect(() => {
		async function getCartTotal() {
			const quantity = await calculateCartTotal();
			setCartTotal(quantity);
		}
		getCartTotal();
	}, [cartItems]);// eslint-disable-line react-hooks/exhaustive-deps

  return <CartContext.Provider
      value={{ addItem, updateItem, removeItem, clear, cartItems, cartTotal, itemsPrice, itemsQty }}
    >
      {children}
    </CartContext.Provider>
};

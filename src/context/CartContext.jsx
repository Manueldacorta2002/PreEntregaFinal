import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addItem = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  
  const clearCart = () => {
    setCart([]);
  };

  
  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

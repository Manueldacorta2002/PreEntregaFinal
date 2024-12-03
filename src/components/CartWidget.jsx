import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <span>🛒</span>
      {cart.length > 0 && <span>{cart.length}</span>}
    </div>
  );
};

export default CartWidget;

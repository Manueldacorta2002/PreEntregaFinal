import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Resumen de Compra</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name} x {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Checkout;

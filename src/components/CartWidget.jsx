import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      🛒
      <span>{cart.length}</span>
    </div>
  );
};

export default CartWidget;

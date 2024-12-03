import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartContainer = () => {
  const { cart, removeItem, clearCart, getTotal } = useContext(CartContext);
  const totalPrice = getTotal();

  const handleCheckout = () => {
    alert("Compra realizada con éxito");
    clearCart();
  };

  return (
    <div>
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
          <button onClick={handleCheckout}>Finalizar compra</button>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default CartContainer;

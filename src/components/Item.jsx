import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db, collection, addDoc } from "../firebase"; 

const Item = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const addProductToFirebase = async () => {
    try {
      await addDoc(collection(db, "products"), product);
      alert("Producto agregado a Firebase");
    } catch (error) {
      console.error("Error al agregar el producto: ", error);
    }
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addItem(product, 1)}>Agregar al carrito</button>
      <button onClick={addProductToFirebase}>Agregar a Firebase</button>
    </div>
  );
};

export default Item;

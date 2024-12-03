import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase"; // importa las funciones de Firebase
import Item from "./Item";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        products.map((product) => <Item key={product.id} product={product} />)
      )}
    </div>
  );
};

export default ItemListContainer;

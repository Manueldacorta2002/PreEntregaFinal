import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import products from "../data/products.json";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulación de fetch
    const fetchProducts = async () => {
      const response = products; 
      setItems(response);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

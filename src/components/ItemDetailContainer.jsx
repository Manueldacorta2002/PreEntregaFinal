import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = products.find((product) => product.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  return (
    <div>{item && <ItemDetail {...item} />}</div>
  );
};

export default ItemDetailContainer;

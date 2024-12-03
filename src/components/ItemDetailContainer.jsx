import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchItem();
  }, [id]);

  return <>{item ? <ItemDetail item={item} /> : <p>Loading...</p>}</>;
};

export default ItemDetailContainer;

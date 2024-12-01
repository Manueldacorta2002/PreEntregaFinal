import React from "react";
import Swal from "sweetalert2";

const ItemDetail = ({ name, price, description, image }) => {
  const handlePurchase = () => {
    Swal.fire({
      title: "Compra exitosa",
      text: `Has comprado ${name} por $${price}`,
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  };

  return (
    <div className="detail-container">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={handlePurchase}>Comprar</button>
    </div>
  );
};

export default ItemDetail;

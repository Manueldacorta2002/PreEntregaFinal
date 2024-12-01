import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Item = ({ id, name, price, description, image }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  return (
    <animated.div style={props} className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button>Ver Detalle</button>
    </animated.div>
  );
};

export default Item;

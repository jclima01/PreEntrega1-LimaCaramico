import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const EmptyCart = () => {
  const {
    totalQuantity,
  } = useCartContext();

  return <div className="flex-direction row p-4 align-content-center justify-content-center">
    {totalQuantity() === 0 && (
        <div className="flex-direction row p-4 align-content-center justify-content-center">
          <p>Carrito Vacío</p>
          <Link to="/">
            <button className="btn btn-primary">Seguir Comprando</button>
          </Link>
        </div>
      )}
  </div>;
};

export default EmptyCart;

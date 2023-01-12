import React from "react";
import Swal from "sweetalert2";
import CartDetail from "../../components/CartDetail/CartDetail";
import CheckOut from "../../components/CheckOut/CheckOut";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { totalQuantity } = useCartContext();
  {
    totalQuantity() === 0 &&
      Swal.fire({
        title: `Carrito Vacío`,
        icon: "warning",
      });
  }

  return (
    <>
      <EmptyCart />
      <CartDetail />
      <CheckOut />
    </>
  );
};

export default CartContainer;

import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CartDetail from "../../components/CartDetail/CartDetail";
import CheckOut from "../../components/CheckOut/CheckOut";
import ContactForm from "../../components/contactForm/ContactForm";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
  const {
    clearCart,
    totalPrice,
    totalQuantity,
  } = useCartContext();

  
  {totalQuantity() === 0 &&
    Swal.fire({
      title: `Carrito Vacío`,

      icon: "success",
    })}
  return (
    <>
    <EmptyCart/>
    <CartDetail/>
    <CheckOut/>
   

 


      
    </>
  );
};

export default CartContainer;

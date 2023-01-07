import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ContactForm from "../../components/contactForm/ContactForm";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
  const {
    cartList,
    clearCart,
    totalPrice,
    deleteItem,
    totalQuantity,
    getOrder,
  } = useCartContext();

  totalQuantity() === 0 &&
    Swal.fire({
      title: `Carrito Vacío`,

      icon: "success",
    });

  return (
    <>
      {totalQuantity() === 0 && (
        <div className="flex-direction row p-4 align-content-center justify-content-center">
          <p>Carrito Vacío</p>
          <Link to="/">
            <button className="btn btn-primary">Seguir Comprando</button>
          </Link>
        </div>
      )}

      <div className="flex-direction row p-4 align-content-center justify-content-center">
        {cartList.map((product) => (
          <div
            className="col-12 d-flex p-3"
            key={product.id}
            style={{ width: "18rem" }}
          >
            <div className="card text-light bg-dark">
              <img
                className="card-Img-top"
                src={product?.imagen}
                alt="card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{product?.nombre}</h5>
                <p>
                  Cantidad : {product?.cantidad}
                  <br />${product?.cantidad * product?.precio}
                </p>
              </div>
              <Button
                variant="primary"
                onClick={() => {
                  deleteItem(product.id);
                }}
              >
                Eliminar
              </Button>
            </div>
          </div>
        ))}
        <div>
          </div>

      {totalPrice() > 0 && (
        <div className="flex-direction row card col-4 justify-content-center">
          <h2 className="">Total: ${totalPrice()}</h2>
          <button className="btn btn-primary col-8" onClick={clearCart}>
            Vaciar carrito
          </button>

          <ContactForm />
          </div>
        )}
        </div>


      
    </>
  );
};

export default CartContainer;

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
        <div>
          Carrito Vacío
          <Link to="/">
            <button className="btn btn-outline-primary">
              {" "}
              Seguir Comprando{" "}
            </button>
          </Link>
        </div>
      )}
      <div className="col-12 col-md-4 nb-5 d-flex p-1 justify-content-center">
        {cartList.map((product) => (
          <Card
            style={{ width: "18rem" }}
            key={product.id}
            className="card text-light bg-dark m-1 "
          >
            <Card.Img variant="top" src={product.imagen} />
            <Card.Body>
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Text>
                Cantidad : {product.cantidad}
                <br /> ${product.cantidad * product.precio}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  deleteItem(product.id);
                }}
              >
                Eliminar
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {totalPrice() > 0 && <label> Total: ${totalPrice()}</label>} <br />
      {totalQuantity() > 0 && (
        <div>
          <button className="btn btn-outline-danger" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Button
            variant="primary"
            onClick={() => {
              getOrder();
            }}
          >
            Generar Orden
          </Button>
        </div>
      )}
      <ContactForm />
    </>
  );
};

export default CartContainer;

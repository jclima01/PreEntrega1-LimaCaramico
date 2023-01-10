import Button from "react-bootstrap/Button";
import { useCartContext } from "../../context/CartContext";

const CartDetail = () => {
  const { cartList, deleteItem, clearCart, totalPrice } = useCartContext();

  return (
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
                deleteItem(product?.id);
              }}
            >
              Eliminar
            </Button>
          </div>
        </div>
      ))}
      {totalPrice() > 0 && (
        <button className="btn btn-primary col-12" onClick={clearCart}>
          Vaciar carrito
        </button>
      )}
    </div>
  );
};

export default CartDetail;

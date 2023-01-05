import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCartContext();
  const [isCount, setIsCount] = useState(true)
  const onAdd = (cantidad) => {
    Swal.fire({
      title: `${product.nombre}`,
      text: `Productos seleccionados: ${cantidad}`,
      icon: "success",
    });

    addToCart({ ...product, cantidad });
    setIsCount(false)
  };
  return (
    <div className="col-12 nb-5 d-flex p-1" key={product.id}>
      <div className="card text-light bg-dark w-100 justify-content-between">
        <img
          className="card-Img-top w-18rem"
          src={product.imagen}
        />
        <div className="card-body">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text">{product.descripcion}</p>
          <p>${product.precio}</p>
          {
          isCount? 
          <ItemCount onAdd={onAdd} stock={10} initial={1} />
          :
          <>
          <Link to='/cart'>
          <button className="btn btn-outline-primary"> Ir al carrito </button>
          </Link>
          
          <Link to='/'>
          <button className="btn btn-outline-primary"> Seguir Comprando </button>
          </Link>
          </>
        }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {
  console.log(product)
  return (
    <div
      className="col-12 nb-5 d-flex p-1 justify-content-center"
      key={product.id}
    >
      <div className="card text-light bg-dark">
        <img
          className="card-Img-top"
          src={product.imagen}
          alt="card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text">{product.descripcion}</p>
          <p>${product.precio}</p>
        <ItemCount/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
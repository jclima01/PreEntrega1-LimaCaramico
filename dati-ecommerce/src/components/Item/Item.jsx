import React from "react";
import { Link } from "react-router-dom";

const Item = ({product}) => {
  return (
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
          <p>${product?.precio}</p>
        </div>
          <Link to={`/detail/${product.id}`} className="btn btn-primary">
            Detalles
          </Link  >
      </div>
    </div>
  );
};

export default Item;

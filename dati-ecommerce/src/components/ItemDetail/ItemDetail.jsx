import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { gFetch } from '../../helpers/gFetch';

const ItemDetail = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      gFetch() // simulación de fetch para consultar una api
        .then((resp) =>
          setProducts(
            resp.filter((product) => product.categoria === categoriaId)
          )
        ) // en esta linea cambia el estado
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch() // simulación de fetch para consultar una api
        .then((resp) => setProducts(resp)) // en esta linea cambia el estado
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  return (
    <div className="flex-direction row">
      {loading ? (
        <h2>Cargando productos ...</h2>
      ) : (
        products.map((product) => (
          <div
            className="col-12 col-md-4 nb-5 d-flex p-1 justify-content-center"
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
                <p className="card-text">{product?.descripcion}</p>
                <p>${product?.precio}</p>
                <Link to={`/detail/${product.id}`}  className="btn btn-primary">
                  Añadir al carrito
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default ItemDetail
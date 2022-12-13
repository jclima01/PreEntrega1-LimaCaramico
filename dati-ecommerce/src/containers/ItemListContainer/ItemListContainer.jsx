import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { gFetch } from "../../helpers/gFetch";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();
  console.log(categoriaId)
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
        <ItemList products={products}/>  
      )}
    </div>
  );
};

export default ItemListContainer;

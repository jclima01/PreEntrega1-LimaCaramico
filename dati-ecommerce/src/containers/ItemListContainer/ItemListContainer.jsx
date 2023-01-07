import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import Loading from "../../components/Loading/Loading";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
const ItemListContainer = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    const queryFiltered = categoryId
      ? query(queryCollection, where("categoria", "==", categoryId))
      : queryCollection;
    getDocs(queryFiltered)
      .then((res) =>
        setProducts(
          res.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    
  }, [categoryId]);

  return (
    <div className="flex-direction row p-4 align-content-center justify-content-center">
      {loading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;

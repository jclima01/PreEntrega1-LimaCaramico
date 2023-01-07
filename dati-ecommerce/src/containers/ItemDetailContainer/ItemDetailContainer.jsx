import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProducts] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", productId);
    getDoc(queryDoc)
      .then((res) => setProducts({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err));
    // .finally()
  }, []);

  return (
    <div className="flex-direction row p-4 align-content-center justify-content-center ">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;

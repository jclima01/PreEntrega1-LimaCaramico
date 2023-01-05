import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [product,setProducts] = useState({})

    useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", productoId );
    getDoc(queryDoc)
      .then((res) => setProducts({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err));
      // .finally()
  }, []);

  return (
    <div className="card w-50">
      <ItemDetail
      product={product}
       />
    </div>
  );
};

export default ItemDetailContainer;

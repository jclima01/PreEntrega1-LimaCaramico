import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { gFetch } from "../../helpers/gFetch";

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [product,setProduct] = useState({})
  console.log(productoId);
  useEffect(() => {
   gFetch(productoId)
    .then(res=>setProduct(res))
    .catch(err =>console.log(err))
  }, [])
  

  return (
    <div>
      <ItemDetail
      product={product}
       />
    </div>
  );
};

export default ItemDetailContainer;

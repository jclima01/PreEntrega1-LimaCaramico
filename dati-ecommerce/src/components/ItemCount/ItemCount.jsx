import { useState } from "react";


const ItemCount = ({ stock = 5, onAdd }) => {
  const [contador, setearContador] = useState(1);


  const agregar = () => {
    if (contador < stock) setearContador(contador + 1);
  };
  const restar = () => {
    if (contador > 1 )setearContador(contador - 1);
  };

  const handleOnAdd = () => onAdd(contador)
  return (
    <center>
      <label >
        Cantidad: {contador}
      </label>
      <button className="btn btn-outline-success m-2" onClick={agregar}>
        +
      </button>


      <button className="btn btn-outline-success m-2" onClick={restar}>
        -
      </button>
      
          <div className="d-grid m-2 d-md-block">
            <button className="btn btn-primary" onClick={handleOnAdd}> Agregar al carrito</button>
          </div>
        
    </center>
  );
};

export default ItemCount;

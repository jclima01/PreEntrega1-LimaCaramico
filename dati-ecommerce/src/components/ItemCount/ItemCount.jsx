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
      <label htmlFor="">
        Cantidad: {contador}
      </label>
      <button className="btn btn-outline-primary" onClick={agregar}>
        +
      </button>


      <button className="btn btn-outline-primary" onClick={restar}>
        -
      </button>
      
          <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-primary" onClick={handleOnAdd}> Agregar al carrito</button>
          </div>
        
    </center>
  );
};

export default ItemCount;

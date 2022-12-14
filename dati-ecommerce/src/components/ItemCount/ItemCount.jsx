import { useState } from "react";

const ItemCount = ({ stock = 5 }) => {
  const [contador, setearContador] = useState(0);
  const [booleano, setBooleano] = useState(true);

  const agregar = () => {
    if (contador < stock) setearContador(contador + 1);
  };
  const restar = () => {
    if (contador > 1 )setearContador(contador - 1);
  };

  
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
    </center>
  );
};

export default ItemCount;

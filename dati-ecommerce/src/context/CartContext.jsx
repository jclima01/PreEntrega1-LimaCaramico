import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const cartLS = JSON.parse(localStorage.getItem("cartLS")) ?? [];
  const [cartList, setCartList] = useState(cartLS);
  
  const [buyerData, setBuyerData] = useState();

  useEffect(() => {
    localStorage.setItem('cartLS', JSON.stringify(cartList))
 
  }, [cartList])
  

  const addToCart = (prod) => {
    
    const idx = cartList.findIndex((product) => product.id === prod.id);
    if (idx === -1) {
      setCartList([...cartList, prod]);
    } else {
      cartList[idx].cantidad += prod.cantidad;
      setCartList([...cartList]);
    }
  };
  const clearCart = () => {
    setCartList([]);
    Swal.fire({
      title: `Carrito Vacío`,

      icon: "success",
    });
   };
   const getOrder = () =>{
    const order ={
       buyer:{name: '', phone: '', email:''},
      items: cartList.map(({nombre,id,precio}) => ({
        nombre,
        id,
        precio
        
      })),
      total: totalPrice()
    }
    console.log(order)
    return order
  }

  const totalPrice = () =>
    cartList.reduce(
      (count, product) => (count += product.cantidad * product.precio),
      0
    );

  const totalQuantity = () =>
    cartList.reduce((count, product) => (count += product.cantidad), 0);

  const deleteItem = (id) => {
    setCartList(cartList.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCart,
        totalQuantity,
        totalPrice,
        deleteItem,
        getOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// casos de usos:
// carrito de compras
// guardar usuario logueado
// darkmode

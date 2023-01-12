import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const cartLS = JSON.parse(localStorage.getItem("cartLS")) ?? [];
  const [cartList, setCartList] = useState(cartLS);
  const [formData, setFormData] = useState({name:"",email:"", direction:"",phone:""});

  useEffect(() => {
    localStorage.setItem("cartLS", JSON.stringify(cartList));
  }, [cartList]);

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
  const getOrder = () => {
    const order = {
      buyer: formData,
      items: cartList.map(({ nombre, id, precio, cantidad }) => ({
        nombre,
        id,
        precio,
        cantidad
      })),
      total: totalPrice(),
    };
    const db = getFirestore();
    const queryOrder = collection(db, "orders");
    addDoc(queryOrder, order)
    .then((res) => {
      Swal.fire({
        title: 'Id de su orden:',
        text: res.id,
      })
    })
    
  };

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

  const handleInputValue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputSubmit = async (e) => {
    e.preventDefault();
    getOrder();
    
    
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        formData,
        setFormData,
        addToCart,
        clearCart,
        totalQuantity,
        totalPrice,
        deleteItem,
        getOrder,
        handleInputValue,
        handleInputSubmit
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

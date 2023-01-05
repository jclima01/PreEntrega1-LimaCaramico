
const GetCartStorage = (cartList) => {
  if (localStorage.getItem("cartList") != null) {
    cartList = JSON.parse(localStorage.getItem("cartList"));
  }
  
};

export default GetCartStorage;

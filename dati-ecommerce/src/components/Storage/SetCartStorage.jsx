
const SetCartStorage = (cartList) => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
 
}

export default SetCartStorage

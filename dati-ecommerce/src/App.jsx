import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import CartContainer from "./containers/CartContainer/CartContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import QuienesSomos from "./containers/QuienesSomos/QuienesSomos";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detail/:productoId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="*" element={<Navigate to= '/' />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from './components/itemListContainer/ItemListContainer'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  )
}

export default App

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useParams } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";

function NavBar() {
  
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "categoryList");
   
    getDocs(queryCollection)
      .then((res) =>
        setCategoryList(
          res.docs.map((category) => ({
            id: category.id,
            ...category.data(),
          }))
        )
      )
      .catch((err) => console.log(err))
  }, []);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink
          className={({ isActive }) =>
            isActive ? "card text-secondary p-2" : "text-secondary p-2 m-2"
          }
          to="/"
        >
          <img
      
            src="https://i.ibb.co/cCN8g7S/logoDati.jpg"
            alt="logoDati"
            border="0"
            background-color="transparent"
            width="50"
            height="50"
          />
        </NavLink>
          <NavLink to='/about-us'
             className={"card text-center  p-2 m-2 bg-secondary text-white"}
          >
            Acerca de nosotros
          </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="bg-trasparent">
          <Nav className="me-auto">
            
            {categoryList.map(({nombre, id}) =>
              <NavLink
              key={id}
              to={`/category/${nombre}`}
              className={"card text-center  p-2 m-2 bg-transparent text-white"}
            >
              {`${nombre}`}
            </NavLink>
            
            )}
            
          </Nav>
          <Nav>
            <NavLink className={"btn btn-secondary"} to="/cart">
              <CartWidget />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

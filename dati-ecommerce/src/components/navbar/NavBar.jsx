import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import QuienesSomos from "../../containers/QuienesSomos/QuienesSomos";
import CartWidget from "../cartWidget/CartWidget";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink
          className={({ isActive }) =>
            isActive ? "card text-secondary p-2" : "text-secondary p-2 m-2"
          }
          to="/home"
        >
          <img
          className="card"
            src="https://i.ibb.co/cCN8g7S/logoDati.jpg"
            alt="logoDati"
            border="0"
            width="50"
            height="50"
          />
        </NavLink>
        

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="bg-trasparent">
          <Nav className="me-auto">
            <NavLink
              to="/quienes-somos"
              className={"card text-center mt-2 m-2 pt-2 p-3 bg-transparent text-secondary "}
            >
              Quienes somos
            </NavLink>

            <NavDropdown 
              className={"card text-center m-2 ml-2 pt-1 bg-transparent text-secondary "}
              title="Nuestros productos"
              id="collasible-nav-dropdown text-secondary"
            >
              <NavLink
                to="/categoria/Pizzas"
                className={"card text-center  p-2 m-2 bg-black text-white"}
              >
                Pizzas
              </NavLink>
              <br />
              <NavLink
                to="/categoria/Calzones"
                className={"card text-center  p-2 m-2 bg-black text-white"}
              >
                Calzones
              </NavLink>
              <br />
              <NavLink
                to="/categoria/Empanadas"
                className={"card text-center  p-2 m-2 bg-black text-white"}
              >
                Empanadas
              </NavLink>
              <br />
              <NavLink
                to="/categoria/Faina"
                className={"card text-center  p-2 m-2 bg-black text-white"}
              >
                Faina
              </NavLink>
              <br />
              <NavLink
                to="/categoria/FuggazzettaRellena"
                className={"card text-center  p-2 m-2 bg-black text-white"}
              >
                Fuggazzettas Rellena
              </NavLink>
              <br />
              <NavLink
                to="/categoria/Bebidas"
                className={"card text-center  p-2 m-2 bg-black text-white"}
              >
                Bebidas
              </NavLink>
              <br />
            </NavDropdown>
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

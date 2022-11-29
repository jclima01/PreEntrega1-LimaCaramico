import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../cartWidget/CartWidget";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          
        
        <Navbar.Brand href="#home"><img
            src="https://i.ibb.co/cCN8g7S/logoDati.jpg"
            alt="logoDati"
            border="0"
            width="50"
            height="50"
          /> Dati Pizzería</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Quienes somos</Nav.Link>
            <Nav.Link href="#pricing">Hacé tu pedido</Nav.Link>
            <NavDropdown
              title="Nuestros productos"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Pizzas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Calzones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Empanadas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Bebidas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

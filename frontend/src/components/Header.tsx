import { Nav, Navbar, Container } from "react-bootstrap";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
function Header(): JSX.Element {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} />
            Ecom Enterprise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart" className="text-white">
                <FaShoppingBasket /> Cart
              </Nav.Link>
              <Nav.Link href="/sign-in" className="text-white">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;

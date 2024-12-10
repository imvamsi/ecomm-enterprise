import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
function Header(): JSX.Element {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} />
              Ecom Enterprise
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link className="text-white">
                  <FaShoppingBasket /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="sign-in">
                <Nav.Link className="text-white">
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;

import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
function Header(): JSX.Element {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Nav.Link as={Link} to="/">
            <Navbar.Brand>
              <img src={logo} />
              Ecom Enterprise
            </Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-nav">
            <Nav className="ms-auto">
              {/* <LinkContainer to="/cart"> */}
              <Nav.Link className="text-white" as={Link} to="/cart">
                <FaShoppingBasket /> Cart
              </Nav.Link>
              {/* </LinkContainer> */}
              {/* <LinkContainer to="sign-in"> */}
              <Nav.Link className="text-white" as={Link} to="/sign-in">
                <FaUser /> Sign In
              </Nav.Link>
              {/* </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;

import { Nav, Navbar, Container } from "react-bootstrap";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
function Header(): JSX.Element {
  return (
    <header>
      <Navbar bg="light" variant="light" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Ecom Enterprise</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingBasket /> Cart
              </Nav.Link>
              <Nav.Link href="/sign-in">
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

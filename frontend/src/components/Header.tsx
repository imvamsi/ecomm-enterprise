import { Nav, Navbar, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
function Header(): JSX.Element {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
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
              <Nav.Link className="text-white" as={Link} to="/cart">
                <FaShoppingBasket /> Cart
                {cartItems.length > 0 && (
                  <Badge pill bg="success" style={{ marginLeft: "1rem" }}>
                    {cartItems.reduce(
                      (acc, currentVal) => acc + currentVal.qty,
                      0
                    )}
                  </Badge>
                )}
              </Nav.Link>

              <Nav.Link className="text-white" as={Link} to="/login">
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

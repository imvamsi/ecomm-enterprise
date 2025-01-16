import { Nav, Navbar, Container, Badge, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersSlice";
import { logout } from "../slices/authSlice";
import { resetCart } from "../slices/cartSlice";
function Header(): JSX.Element {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutFn] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutFn().unwrap();
      dispatch(logout());
      // NOTE: here we need to reset cart state for when a user logs out so the next
      // user doesn't inherit the previous users cart and shipping
      dispatch(resetCart());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        collapseOnSelect
        className="text-white"
      >
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

              {userInfo ? (
                <>
                  <NavDropdown
                    title={userInfo.name}
                    style={{ color: "#fff !important" }}
                  >
                    <NavDropdown.Item as={Link} to="/profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link className="text-white" as={Link} to="/login">
                  <FaUser /> Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;

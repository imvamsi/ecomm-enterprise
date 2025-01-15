import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Form,
  Card,
  Image,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { calculateCartTotal } from "../utils/cart.util";
import { IProduct } from "../entities/product";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const data = useSelector((state) => console.log(state, "state"));
  const dispatch = useDispatch();

  const updateCartQuantityHandler = (product: IProduct, qty: number) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const deleteItemFromCartHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const cartTotalItems = calculateCartTotal(cartItems, "totalQuantity"); // Use 'totalQuantity' as criteria
  const cartTotalPrice = calculateCartTotal(cartItems, "totalPrice"); // Use 'totalPrice' as criteria

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
  return (
    <Row>
      <Col md={8} sm={12}>
        <h1 style={{ marginBottom: "1rem" }}>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is empty <Link to="/">Start Shopping</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroupItem key={item._id}>
                <Row>
                  <Col md={3}>
                    <Image src={item.image} fluid rounded alt={item.name} />
                  </Col>
                  <Col md={3} className="align-center">
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2} className="align-center">
                    ${item.price}
                  </Col>
                  <Col md={2} className="align-center">
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        updateCartQuantityHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2} className="align-center">
                    <Button
                      variant="danger"
                      onClick={() => deleteItemFromCartHandler(item._id)}
                      aria-label={`Delete ${item.name}`}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4} sm={12}>
        <Card>
          <ListGroup>
            <ListGroupItem>
              <h2>Subtotal ({cartTotalItems}) items</h2>${cartTotalPrice}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                variant="primary"
                className="btn-block"
                style={{ width: "100%" }}
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

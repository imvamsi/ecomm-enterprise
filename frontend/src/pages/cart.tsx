import { Link, useNavigate } from "react-router-dom";
import { UseDispatch, useSelector } from "react-redux";
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
import { calculateCartDetails } from "../utils/cart.util";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Row>
      <Col md={8}>
        {<h1 style={{ marginBottom: "1rem" }}> Shopping Cart</h1>}
        {cartItems.length === 0 ? (
          <Message>
            {" "}
            Your Cart is empty <Link to={"/"}>Start Shopping</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems &&
              cartItems.map((item) => (
                <ListGroupItem key={item._id}>
                  <Row>
                    <Col md={3}>
                      <Image src={item.image} fluid rounded />
                    </Col>
                    <Col md={3} className="align-center">
                      <Link to={`/product/${item._id}`}>{item.name}</Link>
                    </Col>
                    <Col md={2} className="align-center">
                      {item.price}
                    </Col>
                    <Col md={2} className="align-center">
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) => console.log(e)}
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
                        onClick={() => console.log(item._id)}
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
      <Col md={4}>
        <Card>
          <ListGroup>
            <ListGroupItem>
              {`Total items in Cart: ${calculateCartDetails(
                cartItems,
                "total"
              )}`}
            </ListGroupItem>
            <ListGroupItem>
              {`Total Price: ${calculateCartDetails(cartItems, "price")}`}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                variant="primary"
                className="btn-block"
                style={{ width: "100%" }}
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

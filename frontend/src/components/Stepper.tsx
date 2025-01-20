import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Stepper({ step1, step2, step3, step4 }) {
  return (
    <Nav className="mb-4 justify-content-center">
      <Nav.Item>
        {step1 ? (
          <Nav.Link as={Link} to="/login">
            Sign in
          </Nav.Link>
        ) : (
          <Nav.Link as={Link} to="/login" disabled>
            Sign in
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <Nav.Link as={Link} to="/shipping">
            Shipping
          </Nav.Link>
        ) : (
          <Nav.Link as={Link} to="/shipping" disabled>
            Shipping
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <Nav.Link as={Link} to="/payment">
            Payment
          </Nav.Link>
        ) : (
          <Nav.Link as={Link} to="/payment" disabled>
            Payment
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <Nav.Link as={Link} to="/placeorder">
            Place Order
          </Nav.Link>
        ) : (
          <Nav.Link as={Link} to="/placeorder" disabled>
            Place Order
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

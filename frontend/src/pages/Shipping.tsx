import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../slices/cartSlice";
import Stepper from "../components/Stepper";

export default function Shipping() {
  const cart = useSelector((state) => state?.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState<string>(shippingAddress?.address);
  const [city, setCity] = useState<string>(shippingAddress?.city);
  const [postalCode, setPostalCode] = useState<string>(
    shippingAddress?.postalCode
  );
  const [country, setCountry] = useState<string>(shippingAddress?.country);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <FormContainer>
      <Stepper step1 step2 />
      <h2>Shipping</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="address">
          <Form.Label>Address</Form.Label>
          {/* todo: add google places API here for populating address */}
          <Form.Control
            type="text"
            placeholder="Enter your address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="address">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Postal Code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="address">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          style={{ width: "100%" }}
          className="mt-4"
        >
          Continue to Checkout{" "}
        </Button>
      </Form>
    </FormContainer>
  );
}

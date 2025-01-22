import {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import FormContainer from "../components/FormContainer";
import Stepper from "../components/Stepper";
import {savePaymentMethod} from "../slices/cartSlice";

export default function Payment() {
    const [paymentMethod, setpaymentMethod] = useState<string>("Credit Card");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;

    useEffect(() => {
        if (!shippingAddress) navigate("/shipping");
    }, [shippingAddress, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/place-order");
    };
    return (
        <FormContainer>
            <Stepper step1 step2 step3/>
            <h2>Payment</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Select Payment Method</Form.Label>
                    <Form.Check
                        className="my-2"
                        type="radio"
                        label="Credit Card"
                        id="stripe"
                        name="paymentMethod"
                        value="Credit Card"
                        checked
                        onChange={(e) => setpaymentMethod(e.target.value)}
                    ></Form.Check>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Continue
                </Button>
            </Form>
        </FormContainer>
    );
}

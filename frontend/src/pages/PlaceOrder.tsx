import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useCreateOrderMutation} from "../slices/ordersSlice.tsx";
import {Button, Card, Col, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useEffect} from "react";
import Stepper from "../components/Stepper.tsx";
import Message from "../components/Message.tsx";
import Loader from "../components/Loader.tsx";
import {clearCart} from "../slices/cartSlice.tsx";

const PlaceOrder = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)

    const [createOrderPoint, {isLoading, error}] = useCreateOrderMutation()

    useEffect(() => {
            if (!cart.shippingAddress.address) navigate('/shipping')
            else if (!cart.paymentMethod) navigate('/payment')
        },
        [cart.shippingAddress, cart.paymentMethod, navigate])

    const submitHandler = async () => {
        // e.preventDefault();
        try {
            const res = await createOrderPoint({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            }).unwrap()
            dispatch(clearCart());
            navigate(`/order/${res._id}`);
            //navigate(`/`)
            console.log(res, 'response')
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <>
            <Stepper step1 step2 step3 step4/>
            <Row>
                <Col md={8}>
                    <ListGroup variant={"flush"}>
                        <ListGroupItem>
                            <h3>Shipping</h3>
                            <strong>Address:</strong><br/>
                            <p>
                                <span>{cart.shippingAddress.address}</span><br/>
                                <span>{cart.shippingAddress.city}</span><br/>
                                <span>{cart.shippingAddress.country}</span><br/>
                                <span>{cart.shippingAddress.postalCode}</span>
                            </p>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h3>Payment Method</h3>
                            {cart?.paymentMethod}
                        </ListGroupItem>
                        <ListGroupItem>
                            {cart.length === 0 ? (
                                <Message>You have no items in the cart!!</Message>
                            ) : (
                                <ListGroup variant={"flush"}>
                                    {cart.cartItems.map(cartItem => (
                                        <ListGroupItem>
                                            <Row>
                                                <Col md={2}>
                                                    <Image src={cartItem.image}
                                                           fluid
                                                           rounded/>
                                                </Col>
                                                <Col className='align-center'>
                                                    <Link to={`/product/${cartItem.id}`}>
                                                        {cartItem.name}
                                                    </Link>
                                                </Col>
                                                <Col>
                                                    {cartItem.price} * {cartItem.qty} =
                                                    ${((cartItem.qty * cartItem.price) * 100) / 100}
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant={"flush"}>
                            <ListGroupItem>
                                <h3>Order Summary</h3>
                            </ListGroupItem>
                            <ListGroupItem>
                                <span>Price:</span>
                                <span className={'px-2'}>{cart.itemsPrice}</span>
                            </ListGroupItem>
                            <ListGroupItem>
                                <span>Shipping Price:</span>
                                <span className={'px-2'}>{cart.shippingPrice}</span>
                                {Number(cart.shippingPrice) === 0 ?
                                    (
                                        <div style={{marginTop: '2rem'}}>
                                            <Message variant={'success'}>Good news! You've
                                                qualified
                                                for free
                                                shipping!!</Message>
                                        </div>
                                    ) : null}
                            </ListGroupItem>
                            <ListGroupItem>
                                <span>Total tax:</span>
                                <span className={'px-2'}>{cart.tax}</span>
                            </ListGroupItem>
                            <ListGroupItem>
                                <span>Total Price:</span>
                                <span className={'px-2'}>{cart.totalPrice}</span>
                            </ListGroupItem>
                            <ListGroup.Item>
                                {/*{error && (*/}
                                {/*    <Message variant='danger'>{error.data.message}</Message>*/}
                                {/*)}*/}
                            </ListGroup.Item>
                            <Button className={'btn-block m-2'}
                                    type={'button'}
                                    disabled={cart.cartItems.length === 0} onClick={submitHandler}>Proceed to
                                Pay</Button>
                            {isLoading && <Loader/>}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </>

    );
};

export default PlaceOrder;

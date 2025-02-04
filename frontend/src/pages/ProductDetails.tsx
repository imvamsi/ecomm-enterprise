import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Form,
  Row,
  Col,
  ListGroupItem,
  Button,
  Image,
  Badge,
} from "react-bootstrap";
import ProductRating from "../components/ProductRating";
import { useGetProductDetailsQuery } from "../slices/productSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

function ProductDetails() {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId as string);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check that product exists before trying to access its properties
  const stockCount = product?.countInStock ?? 0;

  function addToCartHandler() {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  }

  return (
    <>
      {error && (
        <p>
          <Message>
            {(error as { error: string }).error || "An unknown error occurred"}
          </Message>
        </p>
      )}
      {isLoading && !error ? (
        <Loader />
      ) : (
        <>
          <Link to="/" className="btn btn-primary my-3">
            {`\u2190 Go Back`}
          </Link>

          <Row>
            <Col md={6}>
              <Image src={product?.image} alt={product?.name} />
            </Col>
            <Col md={6}>
              <ListGroupItem>
                <h3 className="text-black">{product?.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <ProductRating
                  value={product?.rating ?? 0}
                  text={`${product?.numReviews} Reviews`}
                />
              </ListGroupItem>
              <ListGroupItem className="my-2 text-bold" as={"h4"}>
                $<span>{product?.price}</span>
              </ListGroupItem>
              <ListGroupItem className="my-3">
                <p>{product?.description}</p>
              </ListGroupItem>
              <ListGroupItem>
                {stockCount > 0 ? (
                  <Badge pill bg="success" className="my-5">
                    In Stock
                  </Badge>
                ) : (
                  <Badge pill bg="danger" className="my-5">
                    Out of Stock
                  </Badge>
                )}
                {stockCount > 0 && stockCount < 5 ? (
                  <Badge pill bg="warning" className="mx-3">
                    Running Low
                  </Badge>
                ) : null}
              </ListGroupItem>
              {stockCount > 0 && (
                <ListGroupItem>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(stockCount).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroupItem>
              )}
              <ListGroupItem>
                <Button
                  className="w-100 mt-auto"
                  size="lg"
                  variant="outline-success"
                  type="button"
                  disabled={stockCount < 1}
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default ProductDetails;

import { useParams, Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  Image,
  Pill,
  Badge,
} from "react-bootstrap";
import ProductRating from "../components/ProductRating";
import products from "../products";

function Product(): JSX.Element {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log("🚀 ~ Product ~ product:", product);

  const stockCount = product?.countInStock ?? 0;

  return (
    <>
      <Link to="/" className="btn btn-primary my-3">
        Go Back
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
              <Badge pill bg="warning" className="my-5">
                Running Low
              </Badge>
            ) : null}
          </ListGroupItem>
        </Col>
      </Row>
    </>
  );
}

export default Product;

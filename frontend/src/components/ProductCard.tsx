import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Product } from "../types/product";
import ProductRating from "./ProductRating";

interface ProductType {
  product: Product;
}

export default function ProductCard({ product }: ProductType): JSX.Element {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as={"div"} className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as={"div"}>
          <ProductRating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as={"h3"}>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

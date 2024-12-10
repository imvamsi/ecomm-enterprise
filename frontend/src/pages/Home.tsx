import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import products from "../products";

export default function Home(): JSX.Element {
  return (
    <>
      <h1>LatestProducts</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
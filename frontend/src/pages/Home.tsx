import { Row, Col } from "react-bootstrap";
import products from "../products";

export default function Home(): JSX.Element {
  return (
    <>
      <h1>LatestProducts</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3 key={product._id}>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
}

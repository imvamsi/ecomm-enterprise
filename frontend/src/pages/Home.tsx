import { useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import products from "../products";
import Product from "./Product";

export default function Home(): JSX.Element {
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const data = await axios.get("http://localhost:8000/api/products");
    console.log(data);
  }
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

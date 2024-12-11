import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";

export default function Home(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts(): Promise<void> {
    const { data } = await axios.get<Product[]>(
      "http://localhost:8000/api/products"
    );

    setProducts(data);
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

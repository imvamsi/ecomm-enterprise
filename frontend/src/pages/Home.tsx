import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { IProduct } from "../entities/product";
import { useGetProductsQuery } from "../slices/productSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

export default function Home(): JSX.Element {
  const { data: products, error, isLoading } = useGetProductsQuery();

  return (
    <>
      {error && (
        <p>
          <Message variant="danger">
            {(error as { error: string }).error || "An unknown error occurred"}
          </Message>
        </p>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        !error && (
          <>
            <h1>Latest Products</h1>
            <Row>
              {products?.map((product: IProduct) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </>
        )
      )}
    </>
  );
}

import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { IProduct } from "../entities/product";
import { useGetProductsQuery } from "../slices/productSlice";

export default function Home(): JSX.Element {
  const { data: products, error, isLoading } = useGetProductsQuery();
  console.log("🚀 ~ Home ~ data:", products);

  return (
    <>
      {/* {error ? <p>{error?.status}</p> : null} */}
      {error && (
        <p>
          {(error as { error: string }).error || "An unknown error occurred"}
        </p>
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>LatestProducts</h1>
          <Row>
            {products?.map((product: IProduct) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

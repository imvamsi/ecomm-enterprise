import { useParams } from "react-router-dom";
import products from "../products";

function Product() {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log("🚀 ~ Product ~ product:", product);

  return <div>ProductScreen</div>;
}

export default Product;

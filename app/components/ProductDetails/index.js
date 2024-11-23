import { getSingleProduct } from "@/db/queries";
import ProductOverview from "./ProductOverview";

export default async function ProductDetailsContainer({ productId }) {
  const product = await getSingleProduct(productId);

  return (
    <div>
      {/* product overview */}
      <ProductOverview product={product} />
    </div>
  );
}

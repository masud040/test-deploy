import { getSingleProduct } from "@/db/queries";
import ProductDescription from "./ProductDescription";
import ProductImages from "./ProductImages";
import ProductOverview from "./ProductOverview";
import RelatedProductsContainer from "./RelatedProducts";

export default async function ProductDetailsContainer({ productId }) {
  const product = await getSingleProduct(productId);

  return (
    <>
      {/* product details*/}
      <div className="flex flex-col items-start justify-center gap-4 mb-8 lg:flex-row">
        <ProductImages
          thumbnail={product?.thumbnail}
          images={product?.images}
        />
        <ProductOverview product={product} />
      </div>
      {/* product description */}
      <ProductDescription product={product} />
      {/* related products */}
      <RelatedProductsContainer tags={product.tags} />
    </>
  );
}

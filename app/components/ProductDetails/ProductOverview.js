import ProductDetails from "./ProductDetails";
import ProductImaes from "./ProductImages";

export default function ProductOverview({ product }) {
  return (
    <div className="flex flex-col items-start justify-center gap-4 lg:flex-row">
      <ProductImaes thumbnail={product?.thumbnail} images={product?.images} />
      <ProductDetails product={product} />
    </div>
  );
}

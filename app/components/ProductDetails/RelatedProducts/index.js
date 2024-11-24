import { getRelatedProducts } from "@/db/queries";
import { SectionTitle } from "../../shared/SectionTitle";
import { ProductsContainer } from "./ProductsContainer";

export default async function RelatedProductsContainer({ tags }) {
  const relatedProducts = await getRelatedProducts(tags);

  return (
    <div className="py-4 my-8">
      <SectionTitle sectionTitle="Related Products" />
      <ProductsContainer productData={relatedProducts} />
    </div>
  );
}

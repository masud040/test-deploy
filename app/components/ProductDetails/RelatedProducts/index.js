import { SectionTitle } from "../../shared/SectionTitle";
import { ProductsContainer } from "./ProductsContainer";

export default function RelatedProductsContainer({ tags }) {
  return (
    <div className="py-4 my-8">
      <SectionTitle sectionTitle="Related Products" />
      <ProductsContainer productData={[]} />
    </div>
  );
}

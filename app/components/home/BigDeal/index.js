import { getAllProductsData } from "@/db/queries";
import { SectionTitle } from "../../shared/SectionTitle";
import { ProductContainer } from "./ProductContainer";

export const BigDealContainer = async () => {
  const allProduct = await getAllProductsData();
  return (
    <section className="px-[15px] md:px-10 my-8 lg:px-20 py-4">
      <SectionTitle sectionTitle="Summer" sectionLabel="Big Deal" />
      <ProductContainer products={allProduct} />
    </section>
  );
};

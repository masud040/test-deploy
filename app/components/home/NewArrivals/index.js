import { getNewArraivalProduct } from "@/db/queries";
import { SectionTitle } from "../../shared/SectionTitle";
import { ProductsContainer } from "./ProductsContainer";

export default async function NewArrivalContainer() {
  const newArraivalData = await getNewArraivalProduct();

  return (
    <div className="px-[15px] my-8 md:px-10 lg:px-20 py-4">
      <SectionTitle
        sectionTitle="New Arrivals"
        sectionLabel="Featured Product"
      />

      <ProductsContainer productData={newArraivalData} />
    </div>
  );
}

import ProductDetailsContainer from "@/app/components/ProductDetails";
import Breadcrumb from "@/app/components/shared/Bredcrumb";

export default async function ProductPage({ params: { id } }) {
  return (
    <section className="px-[15px] md:px-10 lg:px-20 py-4 md:py-[19px]">
      <Breadcrumb
        nameWithPath={{ name: "Feature Product", path: "/shop" }}
        name1="New Arrival"
      />
      <ProductDetailsContainer />
    </section>
  );
}

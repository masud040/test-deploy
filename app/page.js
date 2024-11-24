import AddSection from "./components/home/AddSection";
import { Banner } from "./components/home/Banner/Banner";
import BenefitSection from "./components/home/BenefitSection";
import { BigDealContainer } from "./components/home/BigDeal";
import { FeaturesContainer } from "./components/home/Features";
import NewArrivalContainer from "./components/home/NewArrivals";

export default async function Page() {
  return (
    <section>
      <Banner />
      <BenefitSection />
      <NewArrivalContainer />
      <AddSection />
      <FeaturesContainer />
      <BigDealContainer />
    </section>
  );
}

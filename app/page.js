import AddSection from "./components/home/AddSection";
import { Banner } from "./components/home/Banner/Banner";
import BenefitSection from "./components/home/BenefitSection";
import { FeaturesContainer } from "./components/home/Features";
import NewArrivalContainer from "./components/home/NewArrivals";

export default function Home() {
  return (
    <>
      <Banner />
      <BenefitSection />
      <NewArrivalContainer />
      <AddSection />
      <FeaturesContainer />
    </>
  );
}

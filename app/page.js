import AddSection from "./components/home/AddSection";
import { Banner } from "./components/home/Banner/Banner";
import BenefitSection from "./components/home/BenefitSection";
import { FeaturesSection } from "./components/home/Features";
import NewArrivalSection from "./components/home/NewArrivals";

export default function Home() {
  return (
    <>
      <Banner />
      <BenefitSection />
      <NewArrivalSection />
      <AddSection />
      <FeaturesSection />
    </>
  );
}

import AddSection from "./components/home/AddSection";
import { Banner } from "./components/home/Banner/Banner";
import Feature from "./components/home/Feature";
import NewArrivalSection from "./components/home/NewArrivals";

export default function Home() {
  return (
    <>
      <Banner />
      <Feature />
      <NewArrivalSection />
      <AddSection />
    </>
  );
}

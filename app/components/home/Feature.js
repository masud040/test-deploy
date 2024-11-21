import FeatureBanner from "@/public/images/featurebanner.jpg";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md";
import { RiExchangeFundsLine } from "react-icons/ri";
import { FeatureItem } from "../card/FeatureItem";

export default function Feature() {
  return (
    <section
      className="bg-no-repeat bg-cover flex-center"
      style={{ backgroundImage: `url(${FeatureBanner.src})` }}
    >
      <div className="flex flex-col items-start justify-center w-full gap-4 px-4 py-4 mx-auto lg:gap-24 lg:items-center lg:flex-row lg:px-20 bg-secondary-light opacity-90 text-background-light">
        <FeatureItem
          Icon={LiaShippingFastSolid}
          title="Free Shipping"
          description="Buy EDT 3000+ & get free delivery"
        />
        <FeatureItem
          Icon={RiExchangeFundsLine}
          title="7 days exchange"
          description="Exchange whithin 7 days with similar type of products"
        />
        <FeatureItem
          Icon={MdOutlinePayments}
          title="100% Payment Secure"
          description="Cash on delevery and secured online payment"
        />
      </div>
    </section>
  );
}

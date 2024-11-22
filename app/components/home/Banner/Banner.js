import BannerImage from "@/public/images/banner.jpg";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
export const Banner = () => {
  return (
    <div
      className="bg-no-repeat bg-cover flex-center"
      style={{ backgroundImage: `url(${BannerImage.src})` }}
    >
      <div className="py-[111px] lg:py-[166px] px-4 md:px-[10px] lg:px-[403px] space-y-4 text-center bg-opacity-50 bg-black w-full">
        <h1 className="capitalize text-background-light heading5-bold-md-heading1-bold">
          Elevate Your Everyday Style
        </h1>

        <p className="h4-normal text-secondary-extra-light">
          Discover the Latest Trends Sustainable Fashion
        </p>
        <div className="flex-center">
          <Link href="#" className="py-3 btn-primary rounded-3xl">
            Shop Now
          </Link>
          <Link href="#" className="py-3 rounded-btn-primary">
            <FaArrowLeftLong className="text-white arrow-rotate" />
          </Link>
        </div>
      </div>
    </div>
  );
};

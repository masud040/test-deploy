import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
export const SlideCard = ({ feature }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-3 md:gap-10 md:flex-row md:items-center">
      <div className="relative flex-1 w-full flex-center">
        <div className="h-[356.33px] w-[278px] lg:h-[560px] lg:w-[460px] z-40">
          <Image src={feature.image} alt="Men Image" fill />
        </div>
        <div className="absolute bottom-0 w-full h-[270px]  lg:h-[450px]  bg-primary-lightest"></div>
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="uppercase heading4-bold-lg-heading1">{feature.title}</h1>
        <div className="flex-start">
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

import CoupleModel from "@/public/images/couple-model.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function AddSection() {
  return (
    <section className="px-0 md:px-10 lg:px-20 py-4 md:py-[19.5px">
      <div className="flex flex-col items-center w-full p-4 md:flex-row bg-primary-lightest md:px-10 lg:px-16">
        <div className="flex-1 space-y-2 lg:space-y-4">
          <h2 className="italic text-[24px] leading-[42.14px] font-normal text-primary-darker">
            Big Deal
          </h2>

          <h2 className="text-[28px] md:text-[36px] lg:text-[48px] leading-[36.4px] lg:leading-[62.4px] font-bold">
            <span className="text-primary-darker">30%</span> Of for New
            Customers
          </h2>

          <div className="flex-start">
            <Link href="#" className="py-3 btn-primary rounded-3xl">
              Shop Now
            </Link>
            <Link href="#" className="py-3 rounded-btn-primary">
              <FaArrowLeftLong className="text-white arrow-rotate" />
            </Link>
          </div>
        </div>
        <div className="h-[369px] md:h-[400px] lg:h-[495px] w-[328px] md:w-[370px] lg:w-[427px] relative">
          <Image src={CoupleModel} alt="Model" fill />
        </div>
      </div>
    </section>
  );
}

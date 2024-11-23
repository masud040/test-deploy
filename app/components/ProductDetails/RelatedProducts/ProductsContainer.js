"use client";

import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../../card/ProductCard";

export const ProductsContainer = ({ productData }) => {
  const swiperRef = useRef(null);
  console.log(productData);
  return (
    <>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          className="h-[400px]"
          spaceBetween={24}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, // Small screens (mobile)
            },
            768: {
              slidesPerView: 2, // Medium screens (tablet)
            },
            1024: {
              slidesPerView: 3, // Large screens
            },
            1280: {
              slidesPerView: 4, // Extra-large screens
            },
          }}
        >
          {productData?.length > 0 ? (
            productData.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} withRatingAndOf={false} />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <p className="text-center text-primary-dark title-semibold">
                No Related Products.
              </p>
            </SwiperSlide>
          )}
        </Swiper>
        <div className="absolute right-0 gap-2 -top-[59px] flex-start">
          <button
            onClick={() => swiperRef?.current?.slidePrev()}
            className="p-2 rounded-next-prev-button"
          >
            <FaArrowLeftLong className="text-lg" />
          </button>
          <button
            onClick={() => swiperRef?.current?.slideNext()}
            className="p-2 rounded-next-prev-button"
          >
            <FaArrowRightLong className="text-lg" />
          </button>
        </div>
      </div>
      <div className="mt-6 flex-center">
        {productData?.length > 0 && (
          <button className="px-6 py-2 transition duration-500 ease-in-out rounded-lg text-background-light bg-primary-dark body-semibold">
            See More
          </button>
        )}
      </div>
    </>
  );
};

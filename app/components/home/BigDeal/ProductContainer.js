"use client";

import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css"; // Swiper core styles
import "swiper/css/grid"; // Grid module styles
import "swiper/css/navigation"; // Navigation module styles
import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductCard } from "../../card/ProductCard";

export const ProductContainer = ({ products }) => {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={24}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Grid]}
        breakpoints={{
          // Small screens: Single column and row (1x1 grid)
          0: {
            slidesPerView: 1,
            grid: {
              rows: 1, // Single row
            },
          },
          // Medium screens: Two columns and two rows (2x2 grid)
          768: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: "row", // Fill row by row
            },
          },
          // Large screens: Four columns and two rows (4x2 grid)
          1280: {
            slidesPerView: 4,
            grid: {
              rows: 2,
              fill: "row", // Fill row by row
            },
          },
        }}
      >
        {products?.length > 0 ? (
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} withRatingAndOf={true} />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-primary-dark title-semibold">
            No New Arrival Products.
          </p>
        )}
      </Swiper>
      <div className="absolute right-0 gap-2 -top-[72px] flex-start">
        <button
          onClick={() => swiperRef?.current?.slidePrev()}
          className="p-2 transition-colors duration-300 border-2 rounded-full text-primary-dark border-primary-dark hover:bg-primary-dark hover:text-white"
        >
          <FaArrowLeftLong className="text-lg" />
        </button>
        <button
          onClick={() => swiperRef?.current?.slideNext()}
          className="p-2 transition-colors duration-300 border-2 rounded-full text-primary-dark border-primary-dark hover:bg-primary-dark hover:text-white"
        >
          <FaArrowRightLong className="text-lg" />
        </button>
      </div>
      <div className="mt-6 flex-center">
        <button className="px-6 py-2 transition duration-500 ease-in-out rounded-lg text-background-light bg-primary-dark body-semibold">
          See More
        </button>
      </div>
    </div>
  );
};

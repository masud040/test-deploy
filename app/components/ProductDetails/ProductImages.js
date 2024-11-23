"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductImages({ thumbnail, images }) {
  const swiperRef = useRef(null); // Reference for Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // Track the current active slide

  const handleThumbnailClick = (index) => {
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <div className="w-full lg:w-1/2">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        className="relative"
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index on slide change
        ref={swiperRef} // Attach Swiper instance
      >
        {images.map((image, index) => (
          <SwiperSlide key={`Image ${index + 1}`}>
            <div className="relative h-[271px] md:h-[400px] lg:h-[580px] w-full overflow-hidden bg-primary-extra-light">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                fill
                className="object-contain transition-all"
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev-custom left-2">
          <FaArrowLeftLong className="text-xl" />
        </div>
        <div className="swiper-button-next-custom right-2">
          <FaArrowRightLong className="text-xl" />
        </div>
      </Swiper>

      {/* Thumbnail Row */}
      <div className="items-center justify-center hidden my-4 space-x-4 overflow-x-auto md:flex">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)} // Navigate to clicked thumbnail
            className={`border-2 transition-all duration-500 rounded-2xl ${
              index === activeIndex && "border-primary-dark"
            }`}
          >
            <div className="relative w-[107px] lg:w-[145px] h-[100px] lg:h-[142px]  bg-[#ECE9FE] rounded-2xl">
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

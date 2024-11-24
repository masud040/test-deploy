"use client";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideCard } from "./SlideCard";
export const FeaturesContainer = () => {
  const [features, setFeatures] = useState([]);

  // run useeffect for get feature data
  useEffect(() => {
    const getFeatures = async () => {
      try {
        const response = await fetch("/data/features.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFeatures(data);
      } catch (error) {
        console.error("Failed to fetch features:", error);
      }
    };

    getFeatures();
  }, []);
  return (
    <div className="px-[15px] my-8 md:px-10 lg:px-20 py-4 ">
      {/* showing slider when medium  and large screen*/}
      <div className="hidden md:block">
        <Swiper
          className="mySwiper"
          spaceBetween={50}
          pagination={{
            clickable: true,
            className: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          modules={[Pagination]}
        >
          {features?.length > 0 &&
            features?.map((feature) => (
              <SwiperSlide key={feature.id}>
                <SlideCard feature={feature} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* showing card when only small*/}

      <div className="block w-full md:hidden">
        {features?.length > 0 &&
          features?.map((feature) => (
            <SlideCard key={feature.id} feature={feature} />
          ))}
      </div>
    </div>
  );
};

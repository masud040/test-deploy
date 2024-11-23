import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";

import Link from "next/link";
import Rating from "react-rating";
import { AddToCardBtn } from "../Buttons/AddToCardBtn";
export const ProductCard = ({ product, withRatingAndOf }) => {
  return (
    <Link
      href={`/shop/product/${product.id}`}
      className="flex flex-col h-full gap-3 p-3 bg-white border-none rounded-lg group"
    >
      <div className="relative overflow-hidden rounded-lg bg-primary-extra-light flex-center">
        <div className="relative h-[287px] w-full lg:h-[380px] ">
          <Image
            src={product.thumbnail}
            alt={product.name}
            objectFit="contain"
            fill
            className="transition-all duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        {withRatingAndOf && (
          <div className="absolute top-0 p-2 right-5 bg-primary-dark rounded-b-3xl">
            <p className="text-center w-min caption1-bold text-background-light">
              Up to {product?.discount}%
            </p>
          </div>
        )}
      </div>
      {/* rating show based on condition */}

      {withRatingAndOf && (
        <div className="gap-2 flex-start">
          <Rating
            initialRating={product?.rating?.averageRating}
            fullSymbol={<FaStar className="text-yellow-500" />}
            readonly
            emptySymbol={<FaRegStar className="text-yellow-500" />}
          />
          <p className="body-semibold">({product?.rating?.totalRatings})</p>
        </div>
      )}

      <div className="p-2 flex-between">
        <p className="title">{product.name}</p>
        <p className="font-semibold title">BDT {product.price}</p>
      </div>
      {/* product action button */}
      <AddToCardBtn />
    </Link>
  );
};

"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import Rating from "react-rating";
import ProductActionButton from "./ProductActionButton";
export default function ProductOverview({ product }) {
  const { id, name, price, discount, colors, createdAt, sizes, rating } =
    product || {};
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const [quantity, setQuantity] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() - 30);
  const isNewArival = new Date(createdAt) > date;
  let tag;
  // generate a tage based on created date and discount eg: New Arrival or Big Deals
  if (isNewArival && discount >= 15) {
    tag = "Big Deal";
  } else if (isNewArival) {
    tag = "New Arrival";
  } else if (discount >= 15) {
    tag = "Big Deal";
  }
  function handleChangeSize(e) {
    params.set("size", e.target.name);
    replace(`/shop/product/${id}?${params.toString()}`, { scroll: false });
  }
  function handleChangeColor(e) {
    params.set("color", e.target.name);
    replace(`/shop/product/${id}?${params.toString()}`, { scroll: false });
  }
  function increaseQuantity() {
    if (quantity < 5) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  return (
    <div className="w-full space-y-4 lg:space-y-8 lg:w-1/2">
      <div className="space-y-4 lg:space-y-6">
        <div className="p-2 px-10 rounded-lg bg-primary-extra-dark w-fit text-background-light body-semibold">
          {tag}
        </div>

        {/* name */}
        <p className="title-semibold-md-heading3-semibold">{name}</p>

        {/* product rating */}
        <div className="gap-2 flex-start">
          <Rating
            initialRating={rating?.averageRating}
            fullSymbol={<FaStar className="text-xl text-yellow-500" />}
            readonly
            emptySymbol={<FaStar className="text-xl text-[#DFDFDF]" />}
          />
          <p className="body-semibold">({rating?.averageRating})</p>
          <p className="text-primary-dark body-semibold">
            {rating?.totalRatings} reviews
          </p>
        </div>
        {/* price */}
        <p className="heading5-bold md:heading4-bold">BDT {price}</p>
      </div>

      {/* size and color */}
      <div className="grid items-start grid-cols-1 gap-5 py-8 border-[#CECECE] border-dotted border-y md:grid-cols-2">
        {/* show when size available */}
        {sizes && sizes.length > 0 && (
          <div className="space-y-4">
            <p className="body-semibold">Available Size</p>
            <div className="flex gap-2">
              {sizes.map((size, index) => {
                const isSelected =
                  searchParams.get("size") === size ||
                  (index === 0 && !searchParams.get("size"));
                return (
                  <div className="size-selector" key={size}>
                    <input
                      onChange={handleChangeSize}
                      type="radio"
                      name={size}
                      id={`size-${size}`}
                      className="sr-only"
                      checked={isSelected}
                    />
                    <label
                      htmlFor={`size-${size}`}
                      className="rounded-lg body bg-primary-extra-light flex-center size-10"
                    >
                      {size}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* show when size available */}
        {colors && colors.length > 0 && (
          <div className="space-y-4">
            <p className="body-semibold">Available Colors</p>
            <div className="flex gap-4">
              {/* default select first color */}
              {colors.map((color, index) => {
                const isSelected =
                  searchParams.get("color") === color ||
                  (index === 0 && !searchParams.get("color"));
                return (
                  <div className="color-selector" key={color}>
                    <input
                      onChange={handleChangeColor}
                      type="radio"
                      name={color}
                      id={`color-${color}`}
                      className="sr-only "
                      checked={isSelected}
                    />
                    <div className="gap-2 flex-start">
                      <label
                        htmlFor={`color-${color}`}
                        className={`rounded-full size-6 flex-center duration-300 transition-all ${
                          isSelected
                            ? "ring-2 ring-primary-dark"
                            : "ring ring-primary-lightest"
                        }`}
                        style={{
                          backgroundColor: color,
                        }}
                      />
                      <p>{color}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/* floting cart section */}
      <div className="fixed right-0 z-50 flex flex-col items-center gap-2 p-2 -translate-y-1/2 top-1/2 bg-secondary text-background-light rounded-l-xl">
        <IoBagOutline className="text-2xl" />
        <div className="text-center caption1-bold">
          <p>Your bag</p>
          <p>0</p>
        </div>
      </div>
      {/* Quantity */}
      <div className="space-y-4">
        <p className="body-semibold">Quantity</p>
        <div className="bg-[#ECE9FE] flex-start  gap-3 rounded-3xl w-fit">
          <button
            onClick={decreaseQuantity}
            disabled={quantity === 1}
            className="p-3 transition-colors duration-300 hover:bg-primary-light disabled:bg-primary-lighter rounded-l-3xl disabled:cursor-not-allowed"
          >
            <FaMinus />
          </button>
          <p className="w-6 text-center">{quantity}</p>
          <button
            onClick={increaseQuantity}
            disabled={quantity === 5}
            className="p-3 transition-colors duration-300 disabled:bg-primary-lighter hover:bg-primary-light rounded-r-3xl disabled:cursor-not-allowed"
          >
            <FaPlus />
          </button>
        </div>
      </div>
      {/* product action button */}
      <ProductActionButton />
    </div>
  );
}

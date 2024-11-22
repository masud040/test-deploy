import Image from "next/image";
import { AddToCardBtn } from "../Buttons/AddToCardBtn";

export const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col h-full gap-3 p-3 bg-white rounded-lg shadow group">
      <div className="overflow-hidden rounded-lg bg-primary-extra-light flex-center">
        <div className="relative h-[287px] w-full lg:h-[380px] ">
          <Image
            src={product.thumbnail}
            alt={product.name}
            objectFit="contain"
            fill
            className="transition-all duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>
      <div className="p-2 flex-between">
        <p className="title">{product.name}</p>
        <p className="font-semibold title">{product.price}</p>
      </div>
      <AddToCardBtn />
    </div>
  );
};

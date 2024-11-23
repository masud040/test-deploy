import { getRelativeDays } from "@/app/lib/getRelativeDays";
import ProfileImage from "@/public/images/profile.png";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { LuThumbsUp } from "react-icons/lu";
import Rating from "react-rating";
export default function UserReview({ review, index }) {
  const relativeDate = getRelativeDays(review.date);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      {index !== 0 && (
        <div className="my-4 border-b border-dotted border-[#CECECE]"></div>
      )}
      <div className="flex items-start justify-start gap-4">
        <Image
          src={ProfileImage}
          height={50}
          width={50}
          alt={review.user}
          className="border rounded-full border-primary-dark"
        />
        <div>
          <p>
            <span className="mr-1 body-semibold">{review.user}</span>{" "}
            <span className="caption1 text-[#656565]">{relativeDate}</span>
          </p>
          <Rating
            initialRating={review?.rating}
            fullSymbol={<FaStar className="text-lg text-yellow-500" />}
            readonly
            emptySymbol={<FaStar className="text-lg text-[#DFDFDF]" />}
          />
        </div>
      </div>
      <p className="my-3 body-bold">{review?.comment}</p>
      <div className="gap-1 flex-start">
        <button onClick={() => setIsLiked((like) => !like)}>
          {" "}
          <LuThumbsUp
            className={`text-xl ${
              isLiked && "text-primary-dark transition-all duration-300"
            }`}
          />
        </button>
        <p className="caption1">10</p>
      </div>
    </div>
  );
}

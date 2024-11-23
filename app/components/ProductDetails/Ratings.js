import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
export default function Ratings({ rating }) {
  // Extract and calculate percentages from rating data
  const totalRatings = rating?.totalRatings || 0;
  const ratingBreakdown = rating?.ratingBreakdown || {};
  const breakdownData = Object.entries(ratingBreakdown)
    .map(([stars, count]) => {
      const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0;
      return { stars: Number(stars), count, percentage };
    })
    .sort((a, b) => b.stars - a.stars);

  return (
    <div className="order-1 max-w-4xl col-span-1 space-y-4 lg:order-2 ">
      <p className="body-semibold">
        {" "}
        <span>Product Review </span>{" "}
        <span className="text-primary-dark">
          {rating?.totalRatings} reviews
        </span>
      </p>
      <div className="gap-24 flex-between">
        <Rating
          initialRating={rating?.averageRating}
          fullSymbol={<FaStar className="text-3xl text-yellow-500" />}
          readonly
          emptySymbol={<FaStar className="text-3xl text-[#DFDFDF]" />}
        />
        <p className="title-semibold">({rating?.averageRating}.0)</p>
      </div>
      <div className="my-4 border-b border-dotted border-[#CECECE]"></div>
      <div>
        {breakdownData.map((item) => (
          <div key={item.stars} className="flex items-center space-x-4">
            {/* Star count */}
            <span className="w-2 title">{item.stars}</span>
            {/* Rating bar */}
            <div className="relative flex-1 h-2.5 bg-[#DFDFDF] rounded-lg">
              <div
                className="absolute h-full bg-[#FFCF11] rounded-lg"
                style={{ width: `${item.percentage}%` }} // Dynamic width
              ></div>
            </div>
            {/* Count */}
            <span className="w-4 title">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import Ratings from "./Ratings";
import Reviews from "./Reviews";

export default function ProductRatingReviewSection({ reviews, rating }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <Reviews reviews={reviews} />
      <Ratings rating={rating} />
    </div>
  );
}

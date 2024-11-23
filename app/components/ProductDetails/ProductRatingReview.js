import UserReview from "../card/UserReview";

export default function ProductRatingReview({ reviews, rating }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="col-span-1 lg:col-span-2">
        {reviews?.length > 0 ? (
          <div>
            {/* filter by time */}
            <select className="p-2 px-6 mb-8 border body-semibolod border-primary-dark rounded-xl">
              <option value="newest">Newest</option>
              <option value="newest">Oldest</option>
            </select>
            {/* customer reviews */}
            <div className="flex flex-col">
              {reviews.map((review, index) => (
                <UserReview
                  key={`review-${index}`}
                  review={review}
                  index={index}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-center">
            <p className="title-semibold text-primary-dark">No Review!</p>
          </div>
        )}
      </div>
      <div className="col-span-1 lg:col-span-1">Rating</div>
    </div>
  );
}

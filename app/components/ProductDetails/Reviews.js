import UserReview from "../card/UserReview";

export default function Review({ reviews }) {
  return (
    <div className="order-2 col-span-1 lg:col-span-2 lg:order-1">
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
  );
}

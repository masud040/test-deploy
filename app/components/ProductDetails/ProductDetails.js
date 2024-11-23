export default function ProductDetails({ brand, description, details }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:gap-20 lg:grid-cols-3">
      <div className="col-span-1 space-y-4 lg:col-span-2">
        <p className="body-semibold">Description</p>
        <p className="text-justify body">{description}</p>
      </div>
      <div className="col-span-1 space-y-4">
        <p className="body-semibold">Details</p>
        <div className="space-y-3">
          <div className="gap-2 flex-start">
            <p className="body-bold">Brand:</p>
            <p className="body-semibold text-primary-dark">{brand}</p>
          </div>
          <div className="gap-2 flex-start">
            <p className="body-bold">Material:</p>
            <p className="body-semibold text-primary-dark">
              {details?.material}
            </p>
          </div>
          <div className="gap-2 flex-start">
            <p className="body-bold">Origin:</p>
            <p className="body-semibold text-primary-dark">{details?.origin}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

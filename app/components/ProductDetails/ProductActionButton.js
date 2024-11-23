export default function ProductActionButton() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <button className="w-full px-6 py-2 duration-500 border rounded-lg body-semibold border-primary-dark bg-primary-dark transition-color text-background-light `">
        Buy Now
      </button>
      <button className="w-full px-6 py-2 duration-500 border rounded-lg body-semibold border-primary-dark text-primary-dark hover:bg-primary-darker transition-color hover:text-background-light">
        Add To Cart
      </button>
    </div>
  );
}

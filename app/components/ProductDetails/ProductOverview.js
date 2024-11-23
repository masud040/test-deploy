import ProductImaes from "./ProductImages";

export default function ProductOverview({ product }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
      <ProductImaes thumbnail={product?.thumbnail} images={product?.images} />
      <div className="w-full lg:w-1/2">
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          pariatur assumenda, quisquam eveniet labore illum qui, dolorem aliquam
          nobis sit asperiores id rem fuga deleniti! Accusamus possimus eius
          nemo veritatis velit. Amet commodi nam ad porro nobis dolore,
          exercitationem, cumque ullam totam recusandae facere est optio
          delectus numquam pariatur sunt neque quos quaerat vitae quidem
          perferendis. Facere voluptates dolor maiores quasi placeat optio
          expedita beatae recusandae minima. Error iure facere repudiandae
          aperiam hic harum iste reprehenderit laboriosam quis atque. Fugiat
          aliquid ea deserunt quaerat provident quasi cumque atque corrupti
          repudiandae? Voluptatum molestias repellendus inventore eveniet hic
          sint asperiores harum atque.
        </h1>
      </div>
    </div>
  );
}

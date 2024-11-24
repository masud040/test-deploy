import productData from "@/public/data/productData.json";
import { notFound } from "next/navigation";
// get all product
export async function getAllProductsData() {
  const response = await productData;

  if (!response) {
    throw new Error("Network response was not ok");
  }

  return response;
}
// get new arrival products
export async function getNewArraivalProduct() {
  const data = await getAllProductsData();
  return data.slice(0, 8);
}

// get single product by id
export async function getSingleProduct(id) {
  const products = await getAllProductsData();
  const singleProduct = products.find((product) => product.id === id);
  if (singleProduct) {
    return singleProduct;
  } else {
    notFound();
    throw new Error("Product not found");
  }
}

// get related products by product tags

export async function getRelatedProducts(tags) {
  const products = await getAllProductsData();
  const relatedProducts = products.filter((product) =>
    product.tags.some((tag) => tags.includes(tag))
  );

  return relatedProducts;
}

import { notFound } from "next/navigation";

// get new arrival products
export async function getNewArraivalProduct() {
  const response = await fetch("/public/data/productData.json");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.slice(0, 8);
}

// get all product
export async function getAllProductsData() {
  const response = await fetch("/public/data/productData.json");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
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

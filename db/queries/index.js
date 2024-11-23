// get new arrival products
export async function getNewArraivalProduct() {
  const response = await fetch("http://localhost:3000/data/productData.json");

  if (!response) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.slice(0, 10);
}

// get all product
export async function getAllProductsData() {
  const response = await fetch("http://localhost:3000/data/productData.json");

  if (!response) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}

// get single product by id
export async function getSingleProduct(id) {
  const response = await fetch("http://localhost:3000/data/productData.json");

  if (!response) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  const singleProduct = data.find((product) => product.id === id);
  if (singleProduct) {
    return singleProduct;
  } else {
    throw new Error("Product not found");
  }
}

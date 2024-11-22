export async function getNewArraivalProduct() {
  const response = await fetch("http://localhost:3000/data/productData.json");

  if (!response) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.slice(0, 10);
}

export async function getAllProductsData() {
  const response = await fetch("http://localhost:3000/data/productData.json");

  if (!response) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}

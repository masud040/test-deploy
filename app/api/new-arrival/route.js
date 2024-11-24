export async function GET() {
  const res = await fetch("/data/productData.json");
  const data = await res.json();
  return {
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
}

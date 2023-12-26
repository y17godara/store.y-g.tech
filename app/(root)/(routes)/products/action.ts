export async function getProducts() {
  const response = await fetch("/api/products");
  const data = await response.json();

  const products = data?.products;

  return products;
}

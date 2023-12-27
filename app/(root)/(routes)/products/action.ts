export async function getProducts() {
  const response = await fetch("/api/products");
  console.log(response);
  const data = await response.json();

  const products = data?.products;

  return products;
}

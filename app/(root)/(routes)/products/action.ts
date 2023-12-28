export async function getProducts() {
  const response = await fetch("/api/products");
  console.log(response);
  const data = await response.json();

  const products = data?.products;

  return products;
}

export async function getProduct(id: string) {
  try {
    const response = await fetch(`/api/products/${id}`);

    if (response.status === 200) {
      const data = await response.json();
      const product = data?.product;
      return product;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

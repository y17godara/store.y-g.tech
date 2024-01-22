"use server";

const MAX_LIMIT = 8;

const URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export async function fetchDeals(page: number) {
  const response = await fetch(
    URL + `/api/search/products/deals?page=${page}&limit=${MAX_LIMIT}`
  );
  const json = await response.json();
  console.log(json);
  return json;
}

"use client";

import { useQuery } from "@tanstack/react-query";

export default function Deals({
  page = 1,
  limit = 8,
}: {
  page: number;
  limit: number;
}) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["deals"],
    queryFn: () =>
      fetch(`/api/search/products/deals?page=${page}&limit=${limit}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  if (!data.res) {
  }

  if (isSuccess && data?.res) {
    console.log(data);
    return (
      <>
        <section>Hello</section>
      </>
    );
  }
}

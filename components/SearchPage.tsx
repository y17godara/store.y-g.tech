"use client";

import { useEffect, useState, useTransition } from "react";
import { searchQuery } from "@/actions/searchQuery";

export function SearchPage() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const [searchQ, setSearchQ] = useState<any>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      const q = url.searchParams.get("q"); // get ?q= from url

      setSearchQ(q);
    }
  }, []);

  useEffect(() => {
    if (searchQ) {
      startTransition(() => {
        searchQuery(searchQ)
          .then((res) => {
            setSearchResults(res);
            // console.log(res); // debug
          })
          .catch((err) => {
            setError(err.message);
          });
      });
    }
  }, [searchQ]);

  return (
    <>
      {isPending && <div>Loading...</div>}
      {searchResults && (
        <div>
          <h1>Search Results</h1>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <a href={result.url}>{result.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </>
  );
}

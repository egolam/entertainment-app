"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { SlMagnifier } from "react-icons/sl";
import { useCallback } from "react";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  function handleSearch(e) {
    if (e.key === "Enter") {
      router.push(pathname + "?" + createQueryString("search", e.target.value));
    }
  }

  return (
    <div className="pr-9">
      <label
        htmlFor="search"
        className="text-slate-100 text-2xl font-light flex items-center border-b-2 border-transparent focus-within:border-greyish-blue pb-3"
      >
        <SlMagnifier />

        <input
          type="text"
          name="search"
          id="search-bar"
          className="bg-transparent outline-none placeholder:text-white/50 indent-8 w-full tracking-wide"
          placeholder="Search for movies"
          onKeyDown={(e) => handleSearch(e)}
        />
      </label>
    </div>
  );
};

export default SearchBar;
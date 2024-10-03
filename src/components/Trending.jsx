"use client"

import FetchTrending from "@/actions/fetchTrending";

const Trending = () => {
  return (
    <section className="flex flex-col gap-6 pt-4">
      <h2 className="text-[2rem] text-slate-100 font-light">Trending</h2>
      <FetchTrending />
    </section>
  );
};

export default Trending;

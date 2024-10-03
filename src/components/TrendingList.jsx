"use client";

import { useRef } from "react";
import TrendingItem from "./TrendingItem";

const TrendingList = ({ res }) => {
  const scrollRef = useRef();

  const handleScroll = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div
      className="flex overflow-x-auto no-scrollbar h-[14.375rem] gap-12 pr-9"
      ref={scrollRef}
      onWheel={(e) => handleScroll(e)}
    >
      {res.results.map((item) => (
        <TrendingItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TrendingList;

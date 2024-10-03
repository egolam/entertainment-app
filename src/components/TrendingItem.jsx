import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";

const TrendingItem = ({
  backdrop_path,
  name,
  title,
  release_date,
  first_air_date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="min-w-[29.375rem] relative drop-shadow-lg">
      <Image
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={name}
        fill
        className="object-cover rounded-lg"
      />
      <div className="absolute bottom-6 left-6">
        <div className="text-slate-100/75 font-light flex items-center gap-2">
          <p>
            {media_type === "movie"
              ? release_date.slice(0, 4)
              : first_air_date.slice(0, 4)}
          </p>
          <span className="size-1 border bg-slate-100/75 rounded-full"></span>
          <p>{media_type === "tv" ? "TV Series" : "Movie"}</p>
          <span className="size-1 border bg-slate-100/75 rounded-full"></span>
          <p>{vote_average.toFixed(1)}</p>
        </div>
        <h2 className="text-slate-100 text-2xl font-medium">
          {media_type === "movie" ? title : name}
        </h2>
      </div>
      <button className="absolute z-20 right-6 top-6 size-8 bg-dark-blue/50 rounded-full text-slate-100 flex items-center justify-center hover:bg-slate-100 group drop-shadow-[0_0_0.5rem_rgba(255,255,255,0.5)]">
        <FaRegBookmark className="text-sm group-hover:text-dark-blue" />
      </button>
    </div>
  );
};

export default TrendingItem;

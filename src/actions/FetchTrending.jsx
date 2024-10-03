import TrendingList from "@/components/TrendingList";

export default async function FetchTrending() {
  let data = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB_KEY}&language=en-US`
  );
  let res = await data.json();

  if (!res) return <p>Loading...</p>;

  return <TrendingList res={res} />;
}

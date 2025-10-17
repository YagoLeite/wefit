import getMoviesList from "@/query/get-movies-list/getMoviesList";
import { Movie } from "@/types/movie";
import MoviesList from "@/components/movies/movies-list/MoviesList";

export default async function Home() {
  const { products } = await getMoviesList();
  return (
    <section className="flex h-full w-full items-center justify-center">
      <MoviesList initialData={products} />
    </section>
  );
}

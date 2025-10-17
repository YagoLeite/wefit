import MoviesList from "@/components/movies/movies-list/MoviesList";
import { Movie } from "@/types/movie";

export default function HomePage({ initialData }: { initialData: Movie[] }) {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <MoviesList initialData={initialData} />
    </main>
  );
}

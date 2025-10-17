import { Movie } from "@/types/movie";
import MoviesCard from "../movies-card/MoviesCard";

export default function MoviesList({ initialData }: { initialData: Movie[] }) {
  return (
    <section className="flex h-full w-full items-center justify-center gap-4 flex-wrap">
      {initialData.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

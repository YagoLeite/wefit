import getMoviesList from "@/query/get-movies-list/getMoviesList";
import HomePage from "@/components/pages/home/HomePage";

export default async function Home() {
  const { products } = await getMoviesList();
  return <HomePage initialData={products} />;
}

import { useQuery } from "@tanstack/react-query";
import getMoviesList from "./getMoviesList";

export default function useGetMoviesList() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMoviesList,
  });
}

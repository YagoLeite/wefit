import api from "@/lib/api";

export default async function getMoviesList() {
  const response = await api.get("/movies");
  return response?.data;
}

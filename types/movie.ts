export interface Movie {
  id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  director?: string;
  year?: number;
  duration?: number;
}

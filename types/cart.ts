import { Movie } from "./movie";

export interface CartItem {
  movie: Movie;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isLoading: boolean;
  addItem: (movie: Movie) => void;
  removeItem: (movieId: string) => void;
  updateItemQuantity: (movieId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (movieId: string) => boolean;
  getItemQuantity: (movieId: string) => number;
}

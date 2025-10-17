import { CartItem as CartItemType } from "@/types/cart";
import CartItem from "../cart-item/CartItem";

interface CartListProps {
  movies: CartItemType[];
}

export default function CartList({ movies }: CartListProps) {
  console.log(movies);
  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-gray-500 text-center">Nenhum item no carrinho</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {movies.map((cartItem) => (
        <CartItem
          key={cartItem.movie.id}
          movie={cartItem.movie}
          quantity={cartItem.quantity}
        />
      ))}
    </div>
  );
}

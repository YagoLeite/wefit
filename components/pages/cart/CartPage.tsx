import getMoviesList from "@/query/get-movies-list/getMoviesList";
import CartWrapper from "@/components/cart/cart-wrapper/CartWrapper";

export default async function CartPage() {
  return (
    <main className="w-full h-full">
      <CartWrapper />
    </main>
  );
}

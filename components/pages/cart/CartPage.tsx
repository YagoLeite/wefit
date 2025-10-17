import getMoviesList from "@/query/get-movies-list/getMoviesList";
import CartWrapper from "@/components/cart/cart-wrapper/CartWrapper";
import CartWrapperMobile from "@/components/cart/cart-wrapper/CartWrapperMobile";

export default async function CartPage() {
  return (
    <main className="w-full h-full px-4">
      <CartWrapper />
      <CartWrapperMobile />
    </main>
  );
}

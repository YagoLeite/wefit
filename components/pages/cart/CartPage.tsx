"use client";
import getMoviesList from "@/query/get-movies-list/getMoviesList";
import CartWrapper from "@/components/cart/cart-wrapper/CartWrapper";
import { useCart } from "@/contexts/CartContext";
import CartWrapperMobile from "@/components/cart/cart-wrapper/CartWrapperMobile";
import EmptyCart from "@/components/cart/empty-cart/EmptyCart";
import { LoadingSpinner } from "@/components/loaders/LoadingSpinner";

export default function CartPage() {
  const { items, isLoading } = useCart();

  if (isLoading) {
    return (
      <main className="w-full h-full px-4 flex items-center justify-center min-h-[400px]">
        <LoadingSpinner className="py-8" />
      </main>
    );
  }

  return (
    <main className="w-full h-full px-4">
      {items.length === 0 && <EmptyCart />}
      {items.length > 0 && (
        <>
          <CartWrapper items={items} />
          <CartWrapperMobile items={items} />
        </>
      )}
    </main>
  );
}

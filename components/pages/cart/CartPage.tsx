"use client";
import getMoviesList from "@/query/get-movies-list/getMoviesList";
import CartWrapper from "@/components/cart/cart-wrapper/CartWrapper";
import { useCart } from "@/contexts/CartContext";
import CartWrapperMobile from "@/components/cart/cart-wrapper/CartWrapperMobile";
import EmptyCart from "@/components/cart/empty-cart/EmptyCart";
export default function CartPage() {
  const { items } = useCart();

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

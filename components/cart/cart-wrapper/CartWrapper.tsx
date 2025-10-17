"use client";
import CartList from "../cart-list/CartList";
import CartHeader from "../cart-header/CartHeader";
import { useCart } from "@/contexts/CartContext";
import CartTotal from "../cart-total/CartTotal";

export default function CartWrapper() {
  const { items } = useCart();

  return (
    <div className="w-full h-fit flex flex-col gap-4 bg-[white] rounded-[4px] p-4 md:px-6 gap-[21px] md:gap-[24px] ">
      <CartHeader />
      <CartList movies={items} />
      <div className="w-full border-t border-[#999999]" />
      <CartTotal />
    </div>
  );
}

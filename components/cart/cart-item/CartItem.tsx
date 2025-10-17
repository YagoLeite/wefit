"use client";

import { CartItem as CartItemType } from "@/types/cart";
import Image from "next/image";
import NumberInputController from "./NumberInputControler/NumberInputControler";
import { useCart } from "@/contexts/CartContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { memo } from "react";

interface CartItemProps {
  movie: CartItemType["movie"];
  quantity: CartItemType["quantity"];
}

export default function CartItem({ movie, quantity }: CartItemProps) {
  const { updateItemQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity === 0) {
      // Remove o item do carrinho quando quantidade = 0
      removeItem(movie.id);
    } else {
      // Atualiza a quantidade do item
      updateItemQuantity(movie.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center border-0 max-h-[114px]">
      <div className="flex items-center gap-2 w-full max-w-[280px]">
        <Image src={movie.image} alt={movie.title} width={91} height={114} />
        <div className="flex flex-col gap-2 h-full justify-center">
          <h3 className="text-surface text-[14px] font-[700] ml-4">
            {movie.title}
          </h3>
          <p className="text-surface text-[16px] font-[700] ml-4">
            R$ {movie.price.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </div>
      <div className="w-full max-w-[348px]">
        <NumberInputController
          initialValue={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="w-full max-w-[348px]">
        <CardSubTotal movie={movie} quantity={quantity} />
      </div>
    </div>
  );
}

const CardSubTotal = memo(function CardSubTotal({
  movie,
  quantity,
}: {
  movie: CartItemType["movie"];
  quantity: number;
}) {
  const subtotal = movie.price * quantity;
  const formattedSubtotal = subtotal.toFixed(2).replace(".", ",");

  return (
    <div className="text-surface flex items-center justify-start h-full">
      <p className="text-[16px] font-[700]">R$ </p>
      <span>
        <AnimatedCounter
          value={formattedSubtotal}
          className="text-[16px] font-[700] text-surface"
        />
      </span>
    </div>
  );
});

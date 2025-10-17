"use client";

import { CartItem as CartItemType } from "@/types/cart";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import NumberInputController from "./NumberInputControler/NumberInputControler";

interface CartRowMobileProps {
  movie: CartItemType["movie"];
  quantity: CartItemType["quantity"];
}

export function CartTopRowMobile({ movie, quantity }: CartRowMobileProps) {
  const { removeItem } = useCart();

  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <div className="flex flex-col gap-2 h-full justify-center min-w-fit">
        <h3 className="text-surface text-[14px] font-[700] min-w-[102px]">
          {movie.title}
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-surface text-[16px] font-[700]">
          R$ {movie.price.toFixed(2).replace(".", ",")}
        </p>
        <button
          onClick={() => removeItem(movie.id)}
          className="cursor-pointer w-[24px] h-[24px] min-w-[24px] min-h-[24px] flex items-center justify-center hover:opacity-70 transition-opacity"
          aria-label="Remover item do carrinho"
        >
          <Image
            src="/svgs/TrashCanIcon.svg"
            alt="Remover item"
            width={18}
            height={18}
          />
        </button>
      </div>
    </div>
  );
}

export function CartBottomRowMobile({ movie, quantity }: CartRowMobileProps) {
  const { updateItemQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(movie.id);
    } else {
      updateItemQuantity(movie.id, newQuantity);
    }
  };

  const subtotal = movie.price * quantity;
  const formattedSubtotal = subtotal.toFixed(2).replace(".", ",");

  return (
    <div className="flex items-center justify-between w-full gap-4">
      <div>
        <NumberInputController
          initialValue={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="flex flex-col ">
        <span className="text-[12px] font-[700] text-we-gray">SUBTOTAL</span>
        <span className="text-[16px] font-[700] text-surface">
          R$ {formattedSubtotal}
        </span>
      </div>
    </div>
  );
}

export default function CartRowMobile({ movie, quantity }: CartRowMobileProps) {
  return (
    <div className="flex items-start gap-4">
      <Image src={movie.image} alt={movie.title} width={64} height={82} />
      <div className="flex flex-col gap-4 flex-1">
        <CartTopRowMobile movie={movie} quantity={quantity} />
        <CartBottomRowMobile movie={movie} quantity={quantity} />
      </div>
    </div>
  );
}

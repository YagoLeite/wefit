"use client";

import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function CartHeader() {
  const { totalItems } = useCart();

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-end">
        <span className="hidden text-xs text-on-surface/60 md:block">
          Meu Carrinho
        </span>
        <div className="flex items-center gap-1 text-sm font-medium text-on-surface">
          <AnimatedCounter value={totalItems} />
          <span>{totalItems === 1 ? "item" : "itens"}</span>
        </div>
      </div>
      <Image
        src="/images/CartIcon.png"
        alt="Ícone do carrinho"
        width={40}
        height={40}
        priority
      />
    </div>
  );
}

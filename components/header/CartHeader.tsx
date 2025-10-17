"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function CartHeader() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <div className="flex flex-col items-end">
        <span className="hidden text-xs text-on-surface/60 md:block">
          Meu Carrinho
        </span>
        <div className="flex items-center gap-1 text-sm font-medium text-on-surface">
          <AnimatedCounter value={totalItems || 0} />
          <span>{totalItems === 1 ? "item" : "itens"}</span>
        </div>
      </div>
      <div className="w-[40px] h-[40px] flex items-center justify-center">
        <Image
          src="/svgs/CartIcon.svg"
          alt="Ícone do carrinho"
          width={24}
          height={24}
          priority
        />
      </div>
    </Link>
  );
}

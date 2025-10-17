"use client";

import { useCart } from "@/contexts/CartContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/buttons/Button";

export default function CartTotal() {
  const { totalPrice } = useCart();
  const formattedTotal = totalPrice.toFixed(2).replace(".", ",");

  return (
    <div className="w-full flex items-center justify-between">
      <Button className="w-[173px] px-2 py-2">
        <p className="text-[12px] font-[700] text-white">FINALIZAR PEDIDO</p>
      </Button>

      <div className="flex items-center gap-2">
        <span className="text-[14px] font-[700] text-[#999999]">TOTAL</span>
        <div className="flex items-center">
          <span className="text-[24px] font-[700] text-surface">R$ </span>
          <AnimatedCounter
            value={formattedTotal}
            className="text-[24px] font-[700] text-surface"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useCart } from "@/contexts/CartContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/buttons/Button";
import { useRouter } from "next/navigation";

export default function CartTotal() {
  const { totalPrice, clearCart } = useCart();
  const router = useRouter();
  const formattedTotal = totalPrice.toFixed(2).replace(".", ",");

  const handleFinishOrder = () => {
    clearCart();
    router.push("/finished-purchase");
  };

  return (
    <div className="w-full flex items-center justify-between">
      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-between w-full">
        <Button className="w-[173px] px-2 py-2" onClick={handleFinishOrder}>
          <p className="text-[12px] font-[700] text-white">FINALIZAR PEDIDO</p>
        </Button>

        <div className="flex items-center gap-2">
          <span className="text-[14px] font-[700] text-we-gray">TOTAL</span>
          <div className="flex items-center">
            <span className="text-[24px] font-[700] text-surface">R$ </span>
            <AnimatedCounter
              value={formattedTotal}
              className="text-[24px] font-[700] text-surface"
            />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-[700] text-we-gray">TOTAL</span>
          <div className="flex items-center">
            <span className="text-[24px] font-[700] text-surface">R$ </span>
            <AnimatedCounter
              value={formattedTotal}
              className="text-[24px] font-[700] text-surface"
            />
          </div>
        </div>

        <Button className="w-full px-2 py-2" onClick={handleFinishOrder}>
          <p className="text-[12px] font-[700] text-white">FINALIZAR PEDIDO</p>
        </Button>
      </div>
    </div>
  );
}

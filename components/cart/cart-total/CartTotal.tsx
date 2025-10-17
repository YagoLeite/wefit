"use client";

import { useCart } from "@/contexts/CartContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/buttons/Button";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { useState } from "react";

export default function CartTotal() {
  const { totalPrice, clearCart } = useCart();
  const router = useRouter();
  const { showToast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const formattedTotal = totalPrice.toFixed(2).replace(".", ",");

  const handleFinishOrder = () => {
    if (isProcessing) return; // Previne múltiplos cliques

    setIsProcessing(true);

    // Mostra o toast de processamento
    showToast("Processando sua compra...", "info", 3000);

    // Aguarda 3 segundos antes de finalizar
    setTimeout(() => {
      clearCart();
      router.push("/finished-purchase");
    }, 3000);
  };

  return (
    <div className="w-full flex items-center justify-between">
      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-between w-full">
        <Button
          className="w-[173px] px-2 py-2"
          onClick={handleFinishOrder}
          disabled={isProcessing}
        >
          <p className="text-[12px] font-[700] text-white">
            {isProcessing ? "PROCESSANDO..." : "FINALIZAR PEDIDO"}
          </p>
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

        <Button
          className="w-full px-2 py-2"
          onClick={handleFinishOrder}
          disabled={isProcessing}
        >
          <p className="text-[12px] font-[700] text-white">
            {isProcessing ? "PROCESSANDO..." : "FINALIZAR PEDIDO"}
          </p>
        </Button>
      </div>
    </div>
  );
}

"use client";

import Button from "@/components/buttons/Button";
import { useRouter } from "next/navigation";

export default function FinishedPurchaseButton() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Button variant="default" className="w-[173px]" onClick={handleGoHome}>
      <p className="text-white text-[12px] font-[700]">Voltar</p>
    </Button>
  );
}

"use client";
import Button from "@/components/buttons/Button";
import Image from "next/image";

export default function EmptyCart() {
  const handleReloadPage = () => {
    window.location.reload();
  };
  return (
    <div className="w-full h-full bg-[white] rounded-[4px] p-4 flex flex-col items-center justify-center gap-4 min-h-[596px] gap-[24px] pb-[50px]">
      <h3
        className="text-surface text-[20px] font-[700] text-center"
        style={{ textWrap: "balance" }}
      >
        Parece que não há nada por aqui :(
      </h3>
      <div className="w-[447px] h-[265px] max-[450px]:w-[178px] max-[450px]:h-[265px] relative">
        <Image
          src="/images/EmptyState.png"
          alt="Empty Cart"
          fill
          className="object-cover"
        />
      </div>
      <Button
        variant="default"
        className="w-[173px]"
        onClick={handleReloadPage}
      >
        <p className="text-white text-[12px] font-[700]">Recarregar página</p>
      </Button>
    </div>
  );
}

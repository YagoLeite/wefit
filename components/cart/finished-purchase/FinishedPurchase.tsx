import Image from "next/image";
import FinishedPurchaseButton from "./FinishedPurchaseButton";

export default function FinishedPurchase() {
  return (
    <main className="w-full h-full px-4">
      <div className="w-full h-full bg-[white] rounded-[4px] p-4 flex flex-col items-center justify-center gap-4 min-h-[596px] gap-[24px] pb-[50px]">
        <h3
          className="text-surface text-[20px] font-[700] text-center"
          style={{ textWrap: "balance" }}
        >
          Compra realizada com sucesso!
        </h3>
        <div className="w-[294px] h-[307px] max-[450px]:w-[238px] max-[450px]:h-[247px] relative">
          <Image
            src="/images/finishedpurchase.png"
            alt="Compra realizada"
            fill
            className="object-cover"
          />
        </div>
        <FinishedPurchaseButton />
      </div>
    </main>
  );
}

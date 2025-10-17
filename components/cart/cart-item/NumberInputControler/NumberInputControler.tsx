"use client";

import { useNumberInputController } from "./useNumberInputControler";
import Image from "next/image";

interface NumberInputControllerProps {
  initialValue?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export default function NumberInputController({
  initialValue,
  onChange,
  className = "",
}: NumberInputControllerProps) {
  const {
    value,
    increment,
    decrement,
    handleInputChange,
    handleKeyDown,
    canDecrement,
  } = useNumberInputController({
    initialValue,
    onChange,
  });

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Botão de decremento */}
      <button
        type="button"
        onClick={decrement}
        disabled={!canDecrement}
        className="cursor-pointer w-[18px] h-[18px] disabled:opacity-50 disabled:cursor-not-allowed  transition-colors"
      >
        <Image src="/svgs/MinusIcon.svg" alt="Minus" width={18} height={18} />
      </button>

      {/* Input de número */}
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-[62px] h-[26px] max-[450px]:w-[59px] text-center border border-[#D9D9D9] rounded text-sm font-medium text-gray-900 focus:outline-none focus:border-we-blue focus:ring-1 focus:ring-we-blue/20"
      />

      {/* Botão de incremento */}
      <button
        type="button"
        onClick={increment}
        className="cursor-pointer w-[18px] h-[18px] flex items-center justify-center transition-colors"
      >
        <Image src="/svgs/PlusIcon.svg" alt="Plus" width={18} height={18} />
      </button>
    </div>
  );
}

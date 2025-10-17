"use client";

import { useNumberInputController } from "./useNumberInputControler";

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
        className="w-8 h-8 rounded-full border-2 border-we-blue flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-we-blue/10 transition-colors"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6H10"
            stroke="#009EDD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Input de número */}
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-12 h-8 text-center border border-[#D9D9D9] rounded text-sm font-medium text-gray-900 focus:outline-none focus:border-we-blue focus:ring-1 focus:ring-we-blue/20"
      />

      {/* Botão de incremento */}
      <button
        type="button"
        onClick={increment}
        className="w-8 h-8 rounded-full border-2 border-we-blue flex items-center justify-center hover:bg-we-blue/10 transition-colors"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 2V10M2 6H10"
            stroke="#009EDD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

import { useState, useCallback } from "react";

interface UseNumberInputControllerProps {
  initialValue?: number;
  onChange?: (value: number) => void;
}

export function useNumberInputController({
  initialValue = 1,
  onChange,
}: UseNumberInputControllerProps = {}) {
  const [value, setValue] = useState(initialValue);

  const increment = useCallback(() => {
    setValue((prev) => {
      const newValue = prev + 1;
      onChange?.(newValue);
      return newValue;
    });
  }, [onChange]);

  const decrement = useCallback(() => {
    setValue((prev) => {
      const newValue = Math.max(prev - 1, 0);
      onChange?.(newValue);
      return newValue;
    });
  }, [onChange]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      // Permite apenas números
      if (!/^\d*$/.test(inputValue)) return;

      const numValue = parseInt(inputValue) || 0;
      const clampedValue = Math.max(numValue, 0);

      setValue(clampedValue);
      onChange?.(clampedValue);
    },
    [onChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        increment();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        decrement();
      }
    },
    [increment, decrement]
  );

  return {
    value,
    increment,
    decrement,
    handleInputChange,
    handleKeyDown,
    canDecrement: value > 0,
  };
}

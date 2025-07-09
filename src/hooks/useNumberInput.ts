import { useState } from "react";

// util
import { validateInput } from "@/shared/utils/numberInputValidation";

// type
import type { NumberInputProps, NumberType } from "@/shared/types/numbersType";

export const useNumberInput = (
  selectedType: NumberType,
  onSubmit: NumberInputProps["onSubmit"]
) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleManualSubmit = () => {
    const validationError = validateInput(selectedType, inputValue);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    onSubmit(inputValue);
  };

  const handleRandomSubmit = () => {
    setError("");
    onSubmit("random");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (error) setError("");
  };

  return {
    inputValue,
    error,
    handleManualSubmit,
    handleRandomSubmit,
    handleInputChange,
  };
};

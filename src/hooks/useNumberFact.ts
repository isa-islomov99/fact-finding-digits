import { useCallback, useState } from "react";

// utils
import { toastError } from "@/shared/utils/toast";

// type
import type {
  INumberFactResult,
  NumberType,
  UserSelectedNumberType,
} from "@/shared/types/numbersType";

const handleNumberType = (number: UserSelectedNumberType, type: NumberType) => {
  return `${number === "random" ? `random/${type}` : `${number}/${type}`}`;
};

export const useNumberFact = () => {
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<INumberFactResult>({
    number: "",
    fact: "",
  });

  const fetchNumberFact = async (
    number: UserSelectedNumberType,
    type: NumberType
  ) => {
    setIsLoading(true);
    try {
      const url = `http://numbersapi.com/${handleNumberType(number, type)}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch number fact");
      }

      const fact = await response.text();
      setResult({ number, fact });
      setShowResult(true);
    } catch {
      toastError("Failed to fetch number fact. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetResult = useCallback(() => {
    setShowResult(false);
    setResult({ number: "", fact: "" });
  }, []);

  return {
    showResult,
    isLoading,
    result,
    fetchNumberFact,
    resetResult,
  };
};

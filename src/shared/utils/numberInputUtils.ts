import type { NumberType } from "../types/numbersType";

export const getPlaceholder = (type: NumberType): string => {
  const placeholders: Record<NumberType, string> = {
    date: "Enter day of year (1-366) or month/day format (e.g., 2/29)",
    year: "Enter a year (e.g., 1969)",
    math: "Enter any number",
    trivia: "Enter any number",
  };
  return placeholders[type] || "Enter a number";
};

export const getInputType = (type: string): "text" | "number" => {
  return type === "date" ? "text" : "number";
};

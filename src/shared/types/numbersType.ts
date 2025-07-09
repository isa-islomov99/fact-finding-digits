export type NumberType = "trivia" | "math" | "date" | "year";

export type UserSelectedNumberType = string | "random";

export interface INumberFactResult {
  number: UserSelectedNumberType;
  fact: string;
}

export interface NumberInputProps {
  selectedType: NumberType;
  onSubmit: (number: UserSelectedNumberType) => void;
}

export interface ResultDisplayProps {
  number: UserSelectedNumberType;
  type: NumberType;
  fact: string;
  isLoading: boolean;
  onBack: () => void;
}
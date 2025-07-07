import type { NumberType, UserSelectedNumberType } from "../types/numbersType";

export const getTypeLabel = (type: NumberType) => {
  switch (type) {
    case "trivia":
      return "Trivia";
    case "math":
      return "Math";
    case "date":
      return "Date";
    case "year":
      return "Year";
    default:
      return type;
  }
};

export const getNumberDisplay = (
  number: UserSelectedNumberType,
  type: NumberType
) => {
  if (number === "random") {
    return `Random ${getTypeLabel(type)} Fact`;
  }
  return `${getTypeLabel(type)} fact about ${number}`;
};

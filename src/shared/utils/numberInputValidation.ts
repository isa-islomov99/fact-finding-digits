import type { NumberType } from "../types/numbersType";

export const validateInput = (type: NumberType, inputValue: string): string => {
  const trimmedInput = inputValue.trim();

  // Check if input is empty
  if (!trimmedInput) {
    return "Please enter a number";
  }

  // Allow valid numbers and specific formats for dates (e.g., "2/29")
  const numberRegex = /^[0-9]+$/; // Matches only numbers
  const dateRegex = /^[0-9]{1,2}\/[0-9]{1,2}$/; // Matches "month/day" format

  // validate in case of type equal to date
  if (type === "date") {
    if (!numberRegex.test(trimmedInput) && !dateRegex.test(trimmedInput)) {
      return "For dates, please enter a valid day of year (1-366) or month/day format (e.g., 2/29)";
    }

    // If input is a single number, validate day of year
    if (numberRegex.test(trimmedInput)) {
      const number = parseInt(trimmedInput);
      if (number < 1 || number > 366) {
        return "For dates, please enter a day of year (1-366)";
      }
    }

    // If input is in "month/day" format, validate month and day
    if (dateRegex.test(trimmedInput)) {
      const [month, day] = trimmedInput.split("/").map((val) => parseInt(val));
      if (month < 1 || month > 12 || day < 1 || day > 31) {
        return "For dates, please enter a valid month/day format (e.g., 2/29)";
      }
    }

    return ""; // Valid date input
  }

  // For other types, validate as a number
  if (!numberRegex.test(trimmedInput)) {
    return "The input must be a valid number.";
  }

  const number = parseInt(trimmedInput);

  // Additional validation for specific type
  if (type === "year" && number < 0) {
    return "For years, please enter a positive year";
  }

  return ""; // No error
};

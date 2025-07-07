export type NumberType = "trivia" | "math" | "date" | "year";

export type UserSelectedNumberType = string | "random";

export interface INumberFactResult {
  number: UserSelectedNumberType;
  fact: string;
}

export type TRole = "user" | "assistance";

export interface IMessages {
  role: TRole;
  message: string;
}

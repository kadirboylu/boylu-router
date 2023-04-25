export * from "./router";
export * from "./types";

export const isBoolean = (value: any): value is boolean =>
  typeof value === "boolean";

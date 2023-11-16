import type { On } from "snabbdom";

type ArgPrimitive = string | number | boolean | null | undefined;
export type ArgEvent = {
    type: "event";
} & On;

export type TemplateArg = ArgPrimitive | ArgEvent;

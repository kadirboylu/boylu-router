import { h } from "snabbdom";
import type { Accumulator, Component } from "@/types";

const initial: Accumulator = {
    template: "",
};

export const createReducer = (args: unknown[]) => {
    return (
        acc: Accumulator,
        currentString: string,
        index: number
    ): Accumulator => {
        return {
            ...acc,
            template: `${acc.template}${currentString}${String(
                args[index] ?? ""
            )}`,
        };
    };
};

export const createElement = (tagName: string) => {
    return (strings: TemplateStringsArray, ...args: unknown[]): Component => {
        const { template } = strings.reduce(createReducer(args), initial);

        return {
            type: "element",
            template: h(tagName, {}, template),
        };
    };
};

export const div = createElement("div");
export const p = createElement("p");

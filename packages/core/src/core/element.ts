import { h } from "snabbdom";
import type { ComponentProps, Component, TemplateArg } from "@/types";

const initial: ComponentProps = {
    children: "",
    on: {},
};

export const createReducer = (args: TemplateArg[]) => {
    return (
        acc: ComponentProps,
        currentString: string,
        index: number
    ): ComponentProps => {
        const currentArg = args[index];

        if (typeof currentArg === "object" && currentArg?.type === "event")
            return { ...acc, on: { ...acc.on, ...currentArg } };

        return {
            ...acc,
            children: `${acc.children}${currentString}${String(
                currentArg ?? ""
            )}`,
        };
    };
};

export const createElement = (tagName: string) => {
    return (
        strings: TemplateStringsArray,
        ...args: TemplateArg[]
    ): Component => {
        const { children, on } = strings.reduce(createReducer(args), initial);

        return {
            type: "element",
            template: h(tagName, { on }, children),
        };
    };
};

export const div = createElement("div");
export const p = createElement("p");
export const input = createElement("input");

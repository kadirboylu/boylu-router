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

        if (typeof currentArg === "object" && currentArg?.type === "event") {
            const event = currentArg.event;
            return { ...acc, on: { ...acc.on, [event]: currentArg[event] } };
        }

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

        // eslint-disable-next-line no-console
        console.log({ children, on });

        return {
            type: "element",
            template: h(tagName, { on }, children),
        };
    };
};

export const div = createElement("div");
export const p = createElement("p");
export const input = createElement("input");

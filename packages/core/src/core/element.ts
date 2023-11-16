import { h } from "snabbdom";
import type { Component } from "@/types";

export const createElement = (tagName: string) => {
    return (strings: TemplateStringsArray, ...args: unknown[]): Component => ({
        type: "element",
        template: h(
            tagName,
            {},
            strings.reduce(
                (acc, currentString, index) =>
                    `${acc}${currentString}${String(args[index] ?? "")}`,
                ""
            )
        ),
    });
};

export const div = createElement("div");
export const p = createElement("p");

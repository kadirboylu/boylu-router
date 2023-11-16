import type { Component } from "@/types";

export const createElement = (tagName: string) => {
    return (strings: TemplateStringsArray, ...args: unknown[]): Component => {
        const template = strings.reduce((acc, currentString, index) => {
            const arg = args[index] ? String(args[index]) : "";
            return `${acc}${currentString}${arg}`;
        }, "");

        return {
            type: tagName,
            template,
        };
    };
};

export const div = createElement("div");
export const p = createElement("p");

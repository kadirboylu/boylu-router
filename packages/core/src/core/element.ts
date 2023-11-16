export const createElement = (tagName: HTMLElementTagNameMap) => {
    return (strings: TemplateStringsArray, ...args: unknown[]) => {
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

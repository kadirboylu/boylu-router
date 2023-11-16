import { Component } from "@/types";

export const init = (selector: string, component: Component) => {
    const app = document.querySelector(selector);

    if (!app) throw new Error("App not found");

    const newElement = document.createElement(component.type);
    const newTextContent = document.createTextNode(component.template);

    newElement.append(newTextContent);
    app.append(newElement);
};

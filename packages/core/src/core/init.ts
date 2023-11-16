import { init as snabbdomInit, eventListenersModule } from "snabbdom";
import { Component } from "@/types";

const patch = snabbdomInit([eventListenersModule]);

export const init = (selector: string, component: Component) => {
    const app = document.querySelector(selector);

    if (!app) throw new Error("App not found");

    patch(app, component.template);
};

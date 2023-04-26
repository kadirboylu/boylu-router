import { Router } from "./router";
import type { Route } from "../types";

export const createRouter = (routes: Route[]) => {
    const router = new Router(routes);

    router
        .render()
        .then(() => {
            return router;
        })
        .catch((err) => {
            console.error(err);
        });
};

import { Router } from "./router";
import type { Route } from "@/types";

export const createRouter = (routes: Route[]) => {
    const router = new Router(routes);

    router.render().catch((err) => {
        console.error(err);
    });

    return router;
};

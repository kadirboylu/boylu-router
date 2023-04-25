import type { Route } from "../types";
import { Router } from "./router";

export const createRouter = (routes: Route[]) => {
  const router = new Router(routes);
  router.render();

  return router;
};

import { Router } from "../router";

export interface Route {
    name?: string;
    path: string;
    component: (router: Router) => string | Promise<string>;
    children?: Route[];
}

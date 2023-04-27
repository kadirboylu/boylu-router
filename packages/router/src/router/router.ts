import type { Params, Route } from "@/types";

export class Router {
    routes: Route[];
    routerView: HTMLElement | null;
    params: Params;

    constructor(routes: Route[]) {
        this.routes = routes;
        this.routerView = document.getElementById("router-view");
        this.params = {};
        this.bindListeners();
    }

    bindListeners() {
        window.addEventListener("popstate", () => {
            this.render().catch((err) => {
                console.error(err);
            });
        });

        document.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;

            if (
                target.tagName === "A" &&
                target.classList.contains("router-link")
            ) {
                event.preventDefault();
                const href = target.getAttribute("href");

                if (href) {
                    history.pushState({}, "", href);

                    this.render().catch((err) => {
                        console.error(err);
                    });
                }
            }
        });
    }

    async render(routeName?: string) {
        let path = location.pathname;
        let route, fullPath;
        this.params = {};

        if (routeName) {
            route = this.routes.find((route) => route.name === routeName);

            if (route) {
                fullPath = route.path;
                path = fullPath;
            }
        } else {
            const result = this.findRoute(this.routes, path);
            if (result) {
                route = result.route;
                fullPath = result.fullPath;
            }
        }

        if (route && this.routerView) {
            this.params = this.getParams(fullPath || "", path);

            this.routerView.innerHTML = await route.component(this);
        } else {
            const notFoundRoute = this.routes.find(
                (route) => route.path === "*"
            );

            if (notFoundRoute && this.routerView)
                this.routerView.innerHTML = await notFoundRoute.component(this);
        }
    }

    findRoute(
        routes: Route[],
        currentPath: string,
        parentPath = "",
        fullPath = ""
    ): { route: Route; fullPath: string } | undefined {
        for (const route of routes) {
            const currentFullPath = parentPath + route.path;

            if (this.matchRoute(currentFullPath, currentPath))
                return { route, fullPath: currentFullPath };

            if (route.children) {
                const childResult = this.findRoute(
                    route.children,
                    currentPath,
                    currentFullPath,
                    fullPath
                );

                if (childResult) return childResult;
            }
        }
    }

    matchRoute(routePath: string, currentPath: string) {
        const routeParts = routePath.split("/");
        const currentParts = currentPath.split("/");

        if (routeParts.length !== currentParts.length) return false;

        for (let i = 0; i < routeParts.length; i++) {
            if (
                routeParts[i] !== currentParts[i] &&
                !routeParts[i].startsWith(":")
            )
                return false;
        }

        return true;
    }

    getParams(routePath: string, currentPath: string) {
        const params: Params = {};

        const routeParts = routePath.split("/");
        const currentParts = currentPath.split("/");

        for (let i = 0; i < routeParts.length; i++) {
            if (routeParts[i].startsWith(":")) {
                const paramName = routeParts[i].slice(1);
                params[paramName] = currentParts[i];
            }
        }

        return params;
    }
}

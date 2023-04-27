import { describe, expect, test, beforeEach } from "vitest";
import { Router, createRouter } from "@/router";
import { routes } from "./mocks/router.mock";

const clickAnchor = async (href: string) => {
    const anchor = document.querySelector<HTMLAnchorElement>(
        `a[href='${href}']`
    );

    if (!anchor) return;

    anchor.click();
};

describe("Router", () => {
    let router: Router;

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <a href="/" class="router-link">Home</a>
                <a href="/about" class="router-link">About</a>
                <a href="/users" class="router-link">Users</a>
                <a href="/not-exists" class="router-link">Not Found</a>
                <div id="router-view"></div>
            </div>
        `;

        router = createRouter(routes);
    });

    test("should render home route when path is /", () => {
        expect(document.body.innerHTML).toContain("<h1>Home</h1>");
    });

    test("should render about route when path is /about", async () => {
        await clickAnchor("/about");

        expect(document.body.innerHTML).toContain("<h1>About</h1>");
    });

    test("should render users route when path is /users", async () => {
        await clickAnchor("/users");

        const title = document.querySelector("h1");
        const usersList = document.querySelector("ul");

        expect(title?.textContent).toBe("Users");

        expect(usersList?.children.length).toBe(2);
        expect(usersList?.children[0].textContent).toBe("John");
        expect(usersList?.children[1].textContent).toBe("Jane");
    });

    test("should render user route when path is /users/:id", async () => {
        await clickAnchor("/users");
        await clickAnchor("/users/1");

        const params = router.params;
        const title = document.querySelector("h1");
        const name = document.querySelector("p");

        expect(params).toEqual({ id: "1" });
        expect(title?.textContent).toBe("User with id 1");
        expect(name?.textContent).toBe("John");
    });

    test("should render not found route when path is not exists", async () => {
        await clickAnchor("/not-exists");

        expect(document.body.innerHTML).toContain("<h1>Not Found</h1>");
    });
});

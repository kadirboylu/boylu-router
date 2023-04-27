import { Route } from "@/types";

interface User {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
];

const routes: Route[] = [
    {
        name: "home",
        path: "/",
        component: () => "<h1>Home</h1>",
    },
    {
        name: "about",
        path: "/about",
        component: () => "<h1>About</h1>",
    },
    {
        name: "users",
        path: "/users",
        component: () => {
            return `
              <h1>Users</h1>
              <ul>
                  ${users
                      .map((user: User) => {
                          return `<li><a href="/users/${user.id}" class="router-link">${user.name}</a></li>`;
                      })
                      .join("")}
              </ul>
          `;
        },
    },
    {
        name: "user",
        path: "/users/:id",
        component: (router) => {
            const user = users.find(
                (user: User) => user.id === Number(router.params.id)
            );

            if (!user) return "<h1>User not found</h1>";

            return `
              <h1>User with id ${user.id}</h1>
              <p>${user.name}</p>
          `;
        },
    },
    {
        name: "not-found",
        path: "*",
        component: () => "<h1>Not Found</h1>",
    },
];

export { routes };

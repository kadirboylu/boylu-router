# Nested Routes

Nested routes allow you to define a hierarchy of routes that are nested within each other. Nested routes are defined using the `children` property of a `Route` object:

```js
const routes = [
  // ...
  {
    name: "users",
    path: "/users",
    component: () => {
      return `
        <div>
          <h1>Users</h1>
          <p>Here is a list of users:</p>
          <ul>
            <li><a href="/users/1" class="router-link">User 1</a></li>
            <li><a href="/users/2" class="router-link">User 2</a></li>
          </ul>
        </div>
      `;
    },
    children: [
      {
        name: "user",
        path: "/:id",
        component: (router) => {
          const { id } = router.params;

          return `
            <div>
              <h1>User ${id}</h1>
              <p>This is user ${id}.</p>
            </div>
          `;
        },
      },
    ],
  },
];
```

In this example, we define a route with a path of `/users`, which will match any URL that starts with `/users`. When this route is matched, the `component` function will be called and will return a list of users. This route also has a `children` property, which defines a list of nested routes. In this case, we define a route with a path of `/:id`, which will match any value that comes after the `/users/` segment in the URL. When this route is matched, the `id` parameter will be extracted from the URL and stored in the `params` object of the `Router` instance. We can then use this parameter to render a dynamic component.

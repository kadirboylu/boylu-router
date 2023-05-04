# Route Parameters

Route parameters allow you to extract dynamic segments from the URL and use them in your application logic. Route parameters are defined as path segments that start with a colon, like `:id` in the following example:

```js
const routes = [
  {
    name: "user",
    path: "/user/:id",
    component: async (router) => {
      const { id } = router.params;
      const user = await fetch(`/api/users/${id}`).then((res) => res.json());

      return `
        <div>
          <h1>User ${user.name}</h1>
          <p>Email: ${user.email}</p>
        </div>
      `;
    },
  },
];
```

In this example, we define a route with a parameter `:id`, which will match any value that comes after the `/user/` segment in the URL. When this route is matched, the `id` parameter will be extracted from the URL and stored in the `params` object of the `Router` instance. We can then use this parameter to fetch data from an API and render a dynamic component.

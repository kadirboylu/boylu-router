# 404 Page

A 404 page is a special page that is shown to users when the requested URL cannot be found. A 404 page is defined as a route with a path of `*`, which will match any URL that does not match any other routes:

```js
const routes = [
  // ...
  {
    path: "*",
    component: () => {
      return `
        <div>
          <h1>404 - Page not found</h1>
          <p>The requested page could not be found.</p>
        </div>
      `;
    },
  },
];
```

In this example, we define a route with a path of `*`, which will match any URL that does not match any other routes. When this route is matched, the `component` function will be called and will return a 404 page component.

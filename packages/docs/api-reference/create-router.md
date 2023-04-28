# `createRouter`

The `createRouter` function is a factory function that creates a new instance of the `Router` class, sets it up with the provided `routes` array, and then immediately renders the initial route.

Here is a step-by-step breakdown of what the `createRouter` function does:

1. The `createRouter` function takes in an array of `Route` objects as its parameter.
2. It creates a new instance of the `Router` class by invoking its constructor with the `routes` parameter passed to the `createRouter` function.
3. It calls the `render` method on the new `Router` instance, which renders the initial route based on the current URL path.
4. If an error occurs during rendering, the error is logged to the console with `console.error`.
5. Finally, it returns the new `Router` instance.

So, in summary, the `createRouter` function is a convenient way to create and set up a new `Router` instance with a set of `Route` objects, and immediately render the initial route.

```ts
const createRouter = (routes: Route[]) => {
  const router = new Router(routes);

  router.render().catch((err) => {
    console.error(err);
  });

  return router;
};
```

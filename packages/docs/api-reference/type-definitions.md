# Type Definitions

## Params type

Params type used to represent the parameters of a route. It is a record of key-value pairs where the key is a string and the value is a string. For example, if the route is `/users/:id`, then the params object will have a key `id` with the value of the parameter.

```ts
type Params = Record<string, string>;
```

## Route interface

This is an interface that defines the structure of a route. It has the following properties:

- `name (optional)`: a string that represents the name of the route.
- `path`: a string that represents the path of the route.
- `component`: a function that takes an instance of the Router class as its argument and returns a string or a promise of a string. This function is responsible for rendering the content of the route.
- `children (optional)`: an array of Route objects that represent the child routes of this route.

```ts
interface Route {
  name?: string;
  path: string;
  component: (router: Router) => string | Promise<string>;
  children?: Route[];
}
```

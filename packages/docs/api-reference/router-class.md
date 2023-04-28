---
outline: deep
---

# Router Class

The `Router` class is responsible for routing in the web application. It allows you to define routes with associated components, which can then be rendered dynamically in the browser. The class has several methods and properties that allow for customization of the routing behavior.

## Properties

- `routes: Route[]`: An array of `Route` objects representing the routes of the application.
- `routerView: HTMLElement | null`: The DOM element to which the components will be rendered.
- `params: Params`: An object containing the parameters of the current route.

## Methods

### `constructor(routes: Route[])`

This is the constructor of the `Router` class. It takes an array of `Route` objects as its argument and initializes the `routes` property with it. It also initializes the `routerView` property by querying the DOM for an element with the ID "router-view". Finally, it initializes the `params` property as an empty dictionary and calls the `bindListeners` method.

### `bindListeners()`

The `bindListeners` method attaches two event listeners to the window and document objects respectively.

- The first event listener listens for the "popstate" event on the window object, which is triggered when the user navigates back or forward in the browser history. When this event is triggered, the `render` method is called to re-render the route corresponding to the current URL path.

- The second event listener listens for the "click" event on the document object. When the user clicks on an anchor element with the `router-link` class, the method prevents the default link behavior and instead updates the URL path using the `history.pushState` method, then calls the `render` method to render the corresponding route.

### `render(routeName?: string)`

The `render` method is responsible for rendering the appropriate route based on the current URL path. If the `routeName` parameter is provided, the method looks for a route with a matching `name` property and renders that route. Otherwise, it uses the `findRoute` method to find the first matching route and renders that.

If a matching route is found, the method extracts any route parameters from the URL path using the `getParams` method and calls the `component` function of the matching route to render the route content into the `routerView` element. If no matching route is found, the method renders the `notFoundRoute` if it is present in the routes array.

### `findRoute(/* Args */)`

Args: `routes: Route[], currentPath: string, parentPath = "", fullPath = ""`

The `findRoute` method recursively searches for a matching route in the `routes` array based on the current URL path. It checks each `Route` object in the `routes` array and its children recursively until it finds a matching route or reaches the end of the array.

If a matching route is found, the method returns an object with the `route` object and the full path of the matched route. Otherwise, it returns `undefined`.

### `matchRoute(routePath: string, currentPath: string)`

The `matchRoute` method checks if a given route path matches the current URL path. It first splits the route path and the current path into an array of path segments, then checks if the two arrays are the same length. If the arrays are not the same length, it returns `false`.

For each path segment, the method checks if the segment matches the corresponding segment in the current path or if the segment is a parameter by checking if it starts with a colon. If the segment is not a parameter and does not match the current path segment, the method returns `false`.

If all path segments match, the method returns `true`.

### `getParams(routePath: string, currentPath: string)`

The `getParams` method extracts any route parameters from the current URL path based on the route path. It first splits the route path and the current path into an array of path segments, then loops through the segments of the route path.

For each segment, the method checks if it is a parameter by checking if it starts with a colon. If the segment is a parameter, the method extracts the corresponding segment from the current path and adds it as a key-value pair to the `params` object.

Finally, the method returns the `params` object.

# Key Concepts

## SPA

SPA stands for Single Page Application, which is a web application that loads a single HTML page and dynamically updates the content as the user interacts with it. In SPA, all the necessary HTML, CSS, and JavaScript files are loaded on the initial page load, and additional content is retrieved through asynchronous requests to the server.

This approach allows for a more fluid user experience, as the user does not have to wait for the entire page to reload when navigating through the application. Instead, the application updates the content in the browser without reloading the page.

## History API

The History API is a set of methods that allow JavaScript to manipulate the browser's history. The History API is used by the router to update the browser's URL without reloading the page. The History API consists of the following methods:

- `history.pushState()`: Pushes a new state onto the history stack and updates the browser's URL.

- `history.replaceState()`: Replaces the current state on the history stack and updates the browser's URL.

- `history.back()`: Moves the browser back one entry in the history stack.

- `history.forward()`: Moves the browser forward one entry in the history stack.

- `history.go()`: Moves the browser to a specific entry in the history stack.

History API methods are typically used in conjunction with the popstate event to update the browser's URL and render the appropriate view when the user navigates through the application.

See the [History API documentation](https://developer.mozilla.org/en-US/docs/Web/API/History_API) for more information.

## Popstate Event

The popstate event is fired when the active history entry changes, as a result of the user navigating through the browser's history, either by pressing the back/forward button or by calling the history API methods. In an SPA, the popstate event is used by the router to handle changes in the URL and render the appropriate view. When the popstate event is triggered, the router re-renders the view based on the new URL.

```js
window.addEventListener("popstate", () => {
  // Handle changes in the URL
});
```

See the [popstate event documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event) for more information.

## Router

A router handles the mapping between URLs and components. It is responsible for rendering the appropriate component when the user navigates to a specific URL. The router also handles the browser's history, by updating the browser's URL and rendering the appropriate view when the user navigates through the application.

## Route

A route is a configuration object that defines a mapping between a URL and a component to be rendered when that URL is requested. A route typically consists of a path, which is the URL that the user navigates to, and a component, which is the view that should be rendered when the user visits that path. A route can also have a name, which is used to identify the route in the application.

```js
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];
```

## Params

Params are dynamic segments of a URL path that can be used to pass information to a route. Params are defined in the route path by placing a colon ( : ) before the parameter name. When a route with parameters is matched, the router extracts the parameter values from the URL and passes them to the component as a set of key-value pairs.

```js
const routes = [
  //...
  {
    path: "/users",
    name: "users",
    component: Users,
    children: [
      {
        path: "/:id",
        name: "user",
        component: User,
      },
    ],
  },
];
```

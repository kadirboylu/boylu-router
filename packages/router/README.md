# @boylu/router

This is the main package of @boylu/router. Browser playground on [StackBlitz](https://stackblitz.com/edit/boylu-router-playground)

![Vercel](https://vercelbadge.vercel.app/api/kadirboylu/boylu-router)
![npm](https://img.shields.io/npm/v/@boylu/router)

## Installation

-   Add `@boylu/router` to your existing project:

```bash
  npm i @boylu/router
```

```bash
  yarn add @boylu/router
```

```bash
  pnpm i @boylu/router
```

## Usage

### Creating a project with [Vite](https://vitejs.dev/)

```bash
  npm create vite@latest router-test -- --template vanilla
```

```bash
  yarn create vite router-test --template vanilla
```

```bash
  pnpm create vite router-test --template vanilla
```

### Creating Routes

```js
// routes.js
export const routes = [
    {
        name: "home",
        path: "/",
        component: () => "<h1>Home Page</h1>",
    },
    {
        name: "about",
        path: "/about",
        component: () => "<h1>About Page</h1>",
    },
];
```

### Creating a Router

```js
// main.js
import { createRouter } from "@boylu/router";
import { routes } from "./routes.js";

document.querySelector("#app").innerHTML = `
  <nav>
    <a href="/" class="router-link">Home</a>
    <a href="/about" class="router-link">About</a>
  </nav>
  <div id="router-view"></div>
`;

createRouter(routes);
```

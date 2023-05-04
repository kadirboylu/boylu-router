# Getting Started

In this section, we will walk through the process of installing and using `@boylu/router` in a JavaScript project.

## Installation

You can install `@boylu/router` via [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/).

::: code-group

```shell [npm]
npm i @boylu/router
```

```shell [yarn]
yarn add @boylu/router
```

```shell [pnpm]
pnpm i @boylu/router
```

:::

## Usage

If you don't already have a JavaScript project set up, you can create one using [Vite](https://vitejs.dev/).

::: code-group

```shell [npm]
npm create vite@latest router-test -- --template vanilla
```

```shell [yarn]
yarn create vite router-test --template vanilla
```

```shell [pnpm]
pnpm create vite router-test --template vanilla
```

:::

Once the project has been created, navigate to the project directory and install `@boylu/router` like in the previous step. Then, create a file called `routes.js` in the `src` directory and add the following code to it:

```js
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

::: info
If you are using TypeScript, you can use `Route` type from `@boylu/router` to define the type of the `routes` array.
:::

Then, open the `main.js` file and add the following code to it:

```js
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

You need to add the `router-link` class to the links that you want to use for navigation. Your routes will be rendered in the element with the `router-view` id.

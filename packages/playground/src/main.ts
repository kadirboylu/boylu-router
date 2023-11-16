import "./style.css";
import { init } from "@boylu/core";
import { User } from "./components";

/*
import { createRouter } from "@boylu/router";
import { routes } from "./routes";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <nav>
    <a href="/" class="router-link">Home</a>
    <a href="/users" class="router-link">Users</a>
    <a href="/not-exist" class="router-link"> This route does not exist </a>
  </nav>
  <div id="router-view"></div>
`;

createRouter(routes);
*/

const firstName = "Kadir";
const lastName = "Boylu";

init("#app", User({ firstName, lastName }));

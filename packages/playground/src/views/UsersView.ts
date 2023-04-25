import type { User } from "../types";

export const UsersView = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  if (!users.length) {
    return `
      <h1>Users</h1>
      <p>There are no users</p>
    `;
  }

  return `
  <h1>Users</h1>
  <ul>
    ${users
      .map(
        (user) => `
      <li>
        <a href="/users/${user.id}/detail" class="router-link">${user.name}</a>
      </li>
    `
      )
      .join("")}
  </ul>
`;
};

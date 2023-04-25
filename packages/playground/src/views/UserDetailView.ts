import { Router } from "@boylu/router";
import type { User } from "../types";

export const UserDetailView = async (router: Router) => {
  const { id } = router.params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user: User = await response.json();

  if (!user.id)
    return `
    <h2>User with id ${id} not found</h2>
  `;

  return `
    <h2>${user.name}</h2>
    <p><b>Username:</b> ${user.username}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Phone:</b> ${user.phone}</p>
    <p><b>Website:</b> ${user.website}</p>
    <p><b>Address:</b> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
    <p><b>Company:</b> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
  `;
};

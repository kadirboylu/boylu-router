import { div, onClick } from "@boylu/core";

type UserProps = {
  firstName: string;
  lastName: string;
};

export const User = ({ firstName, lastName }: UserProps) =>
  div`
    ${onClick(() => alert(firstName))}
    Hello ${firstName} ${lastName}
  `;

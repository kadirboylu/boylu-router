import { div } from "@boylu/core";

type UserProps = {
  firstName: string;
  lastName: string;
};

export const User = ({ firstName, lastName }: UserProps) =>
  div`Hello ${firstName} ${lastName}!!`;

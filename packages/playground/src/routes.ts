import { Route } from "@boylu/router";
import { HomeView, NotFoundView, UserDetailView, UsersView } from "./views";

export const routes: Route[] = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "users",
    path: "/users",
    component: UsersView,
    children: [
      {
        name: "user-detail",
        path: "/:id/detail",
        component: UserDetailView,
      },
    ],
  },
  {
    path: "*",
    name: "not-found",
    component: NotFoundView,
  },
];

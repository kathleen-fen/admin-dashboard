import Users from "./components/Users";
import UserForm from "./components/UserForm";
import NoMatch from "./components/NoMatch";

export const routes = [
  { path: "/", element: <Users /> },
  { path: "/user/:id", element: <UserForm /> },
  { path: "/addUser", element: <UserForm /> },
  { path: "*", element: <NoMatch /> },
];

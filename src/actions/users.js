import { makeActionCreator } from "../utility";

export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";
export const SET_ISUSERSLOADING = "SET_ISUSERSLOADING";
export const setUsers = makeActionCreator(SET_USERS, "userList");
export const getUsers = makeActionCreator(GET_USERS);
export const setIsUsersLoading = makeActionCreator(
  SET_ISUSERSLOADING,
  "isUsersLoading"
);

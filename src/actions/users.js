import { makeActionCreator } from "../utility";

export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";
export const SET_ISUSERSLOADING = "SET_ISUSERSLOADING";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const setUsers = makeActionCreator(SET_USERS, "userList");
export const getUsers = makeActionCreator(GET_USERS);
export const setIsUsersLoading = makeActionCreator(
  SET_ISUSERSLOADING,
  "isUsersLoading"
);
export const addUser = makeActionCreator(ADD_USER, "user");
export const updateUser = makeActionCreator(UPDATE_USER, "user");
export const deleteUser = makeActionCreator(DELETE_USER, "user");

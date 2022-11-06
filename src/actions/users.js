import { makeActionCreator } from "../utility";

export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";
export const setUsers = makeActionCreator(SET_USERS, "userList");
export const getUsers = makeActionCreator(GET_USERS);

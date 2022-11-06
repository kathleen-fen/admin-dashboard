import { createSelector } from "reselect";

export const userListSelector = createSelector(
  (state) => state.get(`userList`).toJS(),
  (userList) => userList
);

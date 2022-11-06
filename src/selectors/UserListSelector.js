import { createSelector } from "reselect";

export const userListSelector = createSelector(
  (state) => state.get(`userList`).toJS(),
  (userList) => userList
);

export const userSelector = (id) => (state) => {
  const users = userListSelector(state);
  if (users && users.filter((user) => user.id === id).length) {
    return users.filter((user) => user.id === id)[0];
  } else {
    return null;
  }
};

import { createSelector } from "reselect";

export const userListSelector = createSelector(
  (state) => state.get(`userList`).toJS(),
  (userList) => userList
);

export const userSelector = (id) => (state) => {
  const users = userListSelector(state);
  console.log("users", users);
  console.log("users id", id);
  console.log(
    "users filter",
    users.filter((user) => user.id === id)
  );
  if (users && users.filter((user) => user.id === id).length) {
    console.log(
      "users filter",
      users.filter((user) => user.id === id)
    );
    return users.filter((user) => user.id === id)[0];
  } else {
    return null;
  }
};

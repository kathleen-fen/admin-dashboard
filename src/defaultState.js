import { fromJS } from "immutable";
const defaultUserState = {
  userList: [],
  isUsersLoading: false,
};

export const defaultState = fromJS({
  ...defaultUserState,
});

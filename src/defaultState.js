import { fromJS } from "immutable";
const defaultUserState = {
  userList: [],
  isLoading: false,
};

export const defaultState = fromJS({
  ...defaultUserState,
});

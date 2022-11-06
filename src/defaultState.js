import { fromJS } from "immutable";
const defaultUserState = {
  userList: [],
  isUsersLoading: false,
};

const defaultErrorState = {
  error: null,
};

const defaultConfirmState = {
  confirmIsOpen: false,
  confirmMessage: "",
  confirmFunction: null,
};

export const defaultState = fromJS({
  ...defaultUserState,
  ...defaultErrorState,
  ...defaultConfirmState,
});

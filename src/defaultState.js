import { fromJS } from "immutable";
const defaultUserState = {
  userList: [],
  isUsersLoading: false,
};

const defaultErrorState = {
  error: null,
};

const defaultConfirmState = {
  openConfirmDialog: false,
  confirmDialogSettings: {
    /*eslint no-empty-function: ["error", { "allow": ["arrowFunctions"] }]*/
    handleClose: () => {},
    /*eslint no-empty-function: ["error", { "allow": ["arrowFunctions"] }]*/
    handleConfirm: () => {},
    text: "",
    title: "",
  },
};

export const defaultState = fromJS({
  ...defaultUserState,
  ...defaultErrorState,
  ...defaultConfirmState,
});

import { makeActionCreator } from "../utility";

export const SET_OPEN_CONFIRM_DIALOG = "SET_OPEN_CONFIRM_DIALOG";
export const SET_CONFIRM_DIALOG_SETTINGS = "SET_CONFIRM_DIALOG_SETTINGS";

export const setOpenConfirmDialog = makeActionCreator(
  SET_OPEN_CONFIRM_DIALOG,
  "openConfirmDialog"
);

export const setConfirmDialogSettings = makeActionCreator(
  SET_CONFIRM_DIALOG_SETTINGS,
  "confirmDialogSettings"
);

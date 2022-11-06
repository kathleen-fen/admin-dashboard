import { createReducer } from "../utility";
import { fromJS } from "immutable";
import { SET_CONFIRM_DIALOG_SETTINGS } from "../actions";

export const confirmDialogSettings = createReducer(null, {
  [SET_CONFIRM_DIALOG_SETTINGS](state, { confirmDialogSettings }) {
    return fromJS(confirmDialogSettings);
  },
});

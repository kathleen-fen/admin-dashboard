import { createReducer } from "../utility";
import { fromJS } from "immutable";
import { SET_OPEN_CONFIRM_DIALOG } from "../actions";

export const openConfirmDialog = createReducer(null, {
  [SET_OPEN_CONFIRM_DIALOG](state, { openConfirmDialog }) {
    return fromJS(openConfirmDialog);
  },
});

import { fromJS } from "immutable";

import { createReducer } from "../utility";
import { SET_ISUSERSLOADING } from "../actions";

export const isUsersLoading = createReducer(null, {
  [SET_ISUSERSLOADING](state, { isUsersLoading }) {
    return fromJS(isUsersLoading);
  },
});

import { fromJS } from "immutable";

import { createReducer } from "../utility";
import { SET_USERS } from "../actions";

export const userList = createReducer(null, {
  [SET_USERS](state, { userList }) {
    return fromJS(userList);
  },
});

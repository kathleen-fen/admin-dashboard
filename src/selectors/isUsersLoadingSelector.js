import { createSelector } from "reselect";

export const isUsersLoadingSelector = createSelector(
  (state) => state.get(`isUsersLoading`),
  (isUsersLoading) => isUsersLoading
);

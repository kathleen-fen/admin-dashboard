import { createSelector } from "reselect";
export const errorSelector = createSelector(
  (state) => state.get(`error`),
  (error) => {
    if (error) {
      if (error.message) {
        return error.message;
      } else if (error.request) {
        return error.request;
      } else if (error.response && error.response.data) {
        return error.response.data;
      } else return error;
    }
    return null;
  }
);

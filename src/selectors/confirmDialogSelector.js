import { createSelector } from "reselect";

export const openConfirmDialogSelector = createSelector(
  (state) => state.get(`openConfirmDialog`),
  (openConfirmDialog) => openConfirmDialog
);

export const confirmDialogSettingsSelector = createSelector(
  (state) => state.get(`confirmDialogSettings`).toJS(),
  (confirmDialogSettings) => confirmDialogSettings
);

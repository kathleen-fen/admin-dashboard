import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

import {
  openConfirmDialogSelector,
  confirmDialogSettingsSelector,
} from "../../selectors";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const ConfirmDialog = () => {
  const openConfirmDialog = useSelector(openConfirmDialogSelector);
  const confirmDialogSettings = useSelector(confirmDialogSettingsSelector);

  return (
    <Dialog
      open={openConfirmDialog}
      onClose={confirmDialogSettings.handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        {confirmDialogSettings.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{confirmDialogSettings.text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={confirmDialogSettings.handleClose}>
          Cancel
        </Button>
        <Button onClick={confirmDialogSettings.handleConfirm}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;

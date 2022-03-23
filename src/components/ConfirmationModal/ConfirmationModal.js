import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideConfirmation } from "../../store/actions/Confirmation/Confirmation.action";
import classes from "./ConfirmationModal.module.css";

const ConfirmationModal = () => {
  const storeConfirm = useSelector((state) => state.confirm);
  const [showConfirmation, setShowConfirmation] = useState(storeConfirm.show);
  const [title, setTitle] = useState(storeConfirm.title);
  let action = storeConfirm.onAccept;
  let dispatch = useDispatch();

  useEffect(() => {
    setShowConfirmation(storeConfirm.show);
    setTitle(storeConfirm.title);
    action = storeConfirm.onAccept;
  }, [storeConfirm.onAccept, storeConfirm.show, storeConfirm.title]);

  const handleClose = () => dispatch(hideConfirmation());

  const handleSubmit = () => {
    action();
    handleClose();
  };
  return (
    <Dialog
      open={showConfirmation}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title"
      fullWidth={true}
      maxWidth={"sm"}
      className={classes.dialog}
    >
      <DialogTitle id="draggable-dialog-title" className={classes.title}>
        Are you sure ?
      </DialogTitle>
      {title ? (
        <DialogContent>
          <DialogContentText>{title}</DialogContentText>
        </DialogContent>
      ) : null}
      <DialogActions>
        <Button autoFocus onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button varity="success" onClick={() => handleSubmit()}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;

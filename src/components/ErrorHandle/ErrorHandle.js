import React, { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";
import { connect } from "react-redux";
import { HideMessage } from "../../store/actions/Message/Message";

const MessageHandle = (props) => {
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show);
  }, [props.show, props.info.message]);

  const handleClose = () => {
    props.hideMessage();
  };
  return (
    <Snackbar open={show} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={props.info.alert.toLowerCase()}
        sx={{ width: "100%" }}
      >
        {props.info.message || ""}
      </Alert>
    </Snackbar>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { ...state.message, ownProps };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideMessage: () => dispatch(HideMessage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageHandle);

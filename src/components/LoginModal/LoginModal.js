import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import classes from "./LoginModal.module.css";
import { connect } from "react-redux";
import { LOGIN_MODAL } from "../../store/actions/Types/Types";
import { Tooltip } from "@mui/material";
import { PersonAddAlt1Outlined } from "@mui/icons-material";
import FeatherIcon from "feather-icons-react";

const LoginModal = (props) => {
  const [open, setOpen] = useState(props.open);
  const [token, setToken] = useState(props.token);

  useEffect(() => {
    setOpen(props.open);
    setToken(props.token);
  }, [props.open, props.token]);

  return (
    <>
      <Modal show={open} centered backdrop="static" keyboard={false}>
        <LoginForm
          loginModal
          closeComponent={
            <Tooltip title="Login">
              <FeatherIcon icon="x" onClick={() => props.handleLoginClose()} />
            </Tooltip>
          }
          closeComp={() => props.handleLoginClose()}
        />
      </Modal>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.modal.login,
    token: state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginClose: () => dispatch({ type: LOGIN_MODAL }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);

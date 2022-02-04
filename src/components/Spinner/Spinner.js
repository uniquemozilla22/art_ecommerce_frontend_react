import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./Spinner.module.css";
import { Spinner } from "react-bootstrap";

const SpinnerComp = (props) => {
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  return (
    <Modal open={show}>
      <Spinner
        animation="border"
        role="status"
        variant="info"
        className={classes.spinner}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Modal>
  );
};

export default SpinnerComp;

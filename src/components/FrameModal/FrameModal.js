import { Box, Modal } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideFrame } from "../../store/actions/Frame/Frame.action";
import classes from "./FrameModal.module.css";
import parse from "html-react-parser";
import { showConfirmation } from "../../store/actions/Confirmation/Confirmation.action";
import Success from "./Success/Success";
import ErrorModal from "./Error/ErrorModal";

const FrameModal = () => {
  const frameModal = useSelector((state) => state.frame);
  const [showFrame, setShowFrmae] = useState(frameModal.show);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState(null);
  const iFrameRef = useRef(null);

  useEffect(() => {
    setShowFrmae(frameModal.show);
  }, [frameModal, frameModal.show]);

  const dispatch = useDispatch();

  const handleDismiss = (e) => {
    e.preventDefault();
    hideFrameModal();
  };

  const hideFrameModal = () => {
    dispatch(hideFrame());
  };

  const successMessage = () => {
    dispatch(hideFrame());
    setShowSuccess(true);
  };
  const errorMessage = () => {
    dispatch(hideFrame());
    setShowError(true);
  };

  window.addEventListener("message", function (e) {
    if (iFrameRef?.current?.contentWindow?.hideModalFunction()) {
      hideFrameModal();
    }
    if (
      iFrameRef?.current?.contentWindow?.successModel().show === true &&
      iFrameRef?.current?.contentWindow?.successModel().success === true
    ) {
      successMessage();
      setMessage("Payment Successful");
    }
    if (
      iFrameRef?.current?.contentWindow?.successModel().show === true &&
      iFrameRef?.current?.contentWindow?.successModel().success === false
    ) {
      errorMessage();
      setMessage("Payment Error");
    }
  });
  return (
    <>
      <Modal
        open={showFrame}
        onClose={hideFrameModal}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Box className={classes.frame__container}>
          <iframe
            ref={iFrameRef}
            id="frame-latic"
            title="frame-latic"
            srcDoc={frameModal?.data || "<p>Loading...</p>"}
            data={"unique123"}
          ></iframe>
        </Box>
      </Modal>
      <Modal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Success
          message={message}
          handleDismiss={(e) => {
            e.preventDefault();
            setShowSuccess(false);
          }}
        />
      </Modal>
      <Modal
        open={showError}
        onClose={() => setShowError(false)}
        centered
        keyboard={false}
      >
        <ErrorModal
          message={message}
          handleDismiss={(e) => {
            e.preventDefault();
            setShowError(false);
          }}
        />
      </Modal>
    </>
  );
};

export default FrameModal;

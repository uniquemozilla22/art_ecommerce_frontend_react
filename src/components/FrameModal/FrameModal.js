import { Box, Modal } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideFrame } from "../../store/actions/Frame/Frame.action";
import classes from "./FrameModal.module.css";
import parse from "html-react-parser";
import { showConfirmation } from "../../store/actions/Confirmation/Confirmation.action";
import Success from "./Success/Success";

const FrameModal = () => {
  const frameModal = useSelector((state) => state.frame);
  const [showFrame, setShowFrmae] = useState(frameModal.show);
  const [showSuccess, setShowSuccess] = useState(false);
  const iFrameRef = useRef(null);

  useEffect(() => {
    setShowFrmae(frameModal.show);
  }, [frameModal, frameModal.show]);

  const dispatch = useDispatch();

  const hideFrameModal = () => {
    dispatch(hideFrame());
  };

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (iFrameRef?.current?.contentWindow?.hideModalFunction()) {
        hideFrameModal();
      }
      if (iFrameRef?.current?.contentWindow?.successModel().show === true) {
        successMessage();
      }
    });
  }, []);

  const successMessage = () => {
    dispatch(hideFrame());
    setShowSuccess(true);
  };

  return (
    <>
      <Modal open={showFrame} onClose={hideFrameModal}>
        <Box className={classes.frame__container}>
          <iframe
            ref={iFrameRef}
            id="frame-latic"
            title="frame-latic"
            srcDoc={frameModal?.data || "<p>Loading...</p>"}
            data={"unique123"}
            loading="lazy"
          ></iframe>
        </Box>
      </Modal>
      <Modal open={showSuccess} onClose={() => setShowSuccess(false)}>
        <Box className={classes.frame__container}>
          <Success />
        </Box>
      </Modal>
    </>
  );
};

export default FrameModal;

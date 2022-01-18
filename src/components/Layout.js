import React from "react";
import Header from "./Header/Header";
import { Container } from "@mui/material";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;

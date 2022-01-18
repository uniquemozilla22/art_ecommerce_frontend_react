import { Grid, Container } from "@mui/material";
import React, { useState } from "react";
import TopTag from "./Toptag/TopTag";

const Header = () => {
  const [data, setData] = useState({
    contactNumber: "+977 9812345123",
  });

  return (
    <>
      <TopTag contact={data.contactNumber} />
    </>
  );
};

export default Header;

import { Grid, Container } from "@mui/material";
import React, { useState } from "react";
import TopTag from "./Toptag/TopTag";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  const [data, setData] = useState({
    name: "Art Gallery",
    contactNumber: "+977 9812345123",
    logo: "https://uploads.turbologo.com/uploads/design/hq_preview_image/2973807/draw_svg20210507-22909-1fwkwcd.svg.png",
  });

  return (
    <>
      <TopTag contact={data.contactNumber} />
      <Navbar logo={data.logo} name={data.name} />
    </>
  );
};

export default Header;

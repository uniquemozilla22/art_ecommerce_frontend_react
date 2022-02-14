import React, { useState } from "react";
import TopTag from "./Toptag/TopTag";
import Navbar from "./Navbar/Navbar";
import Categories from "./Categories/Categories";
import { connect } from "react-redux";
import { CATEGORY } from "../../store/actions/Types/Types";

const Header = ({ data, logout, loggedIn }) => {
  return (
    <>
      <TopTag contact={data.contactNumber} />
      <Navbar logo={data.logo} name={data.name} loggedIn={loggedIn} />
      <Categories data={data.categories} />
    </>
  );
};

export default Header;

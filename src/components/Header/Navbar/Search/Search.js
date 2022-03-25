import {
  Autocomplete,
  TextField,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import classes from "./Search.module.css";
import { SearchOutlined } from "@mui/icons-material";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {};
  return (
    <form onSubmit={handleSubmit}>
      <OutlinedInput
        id="SearchBar"
        className={classes.search__bar__auto}
        endAdornment={
          <InputAdornment position="end">
            <SearchOutlined />
          </InputAdornment>
        }
        onChange={handleChange}
      />
      <input type="submit" className="d-none" />
    </form>
  );
};

export default Search;

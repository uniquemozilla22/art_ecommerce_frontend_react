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
  return (
    <OutlinedInput
      id="SearchBar"
      className={classes.search__bar__auto}
      endAdornment={
        <InputAdornment position="end">
          <SearchOutlined />
        </InputAdornment>
      }
      aria-describedby="outlined-weight-helper-text"
      inputProps={{
        "aria-label": "weight",
      }}
    />
  );
};

export default Search;

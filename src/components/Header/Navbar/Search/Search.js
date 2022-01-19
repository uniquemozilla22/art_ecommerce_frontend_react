import {
  Autocomplete,
  TextField,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import SearchFeild from "../../../../ProductFeild/ProductFeild";
import Art1 from "../../../../Assets/art1.jpg";
import Art2 from "../../../../Assets/art2.jpg";
import Art3 from "../../../../Assets/art3.jpg";
import classes from "./Search.module.css";
import { borderRadius } from "@mui/system";
import { SearchOutlined } from "@mui/icons-material";

const Search = () => {
  return (
    <OutlinedInput
      id="outlined-adornment-weight"
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

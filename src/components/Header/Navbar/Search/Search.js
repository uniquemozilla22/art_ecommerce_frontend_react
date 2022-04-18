import {
  Autocomplete,
  TextField,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import classes from "./Search.module.css";
import { SearchOutlined } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router";

const Search = () => {
  const location = useLocation();

  const [search, setSearch] = useState();
  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigation("search", { state: { search } });
  };

  const ShortCutAnotation = () => {
    return (
      <div className={classes.placeholder}>
        <p>
          Alt <span>S</span>
        </p>
      </div>
    );
  };

  const handleChange = (e) => setSearch(e.target.value);
  return (
    <form onSubmit={handleSubmit}>
      <OutlinedInput
        id="SearchBar"
        placeholder={location.state?.search}
        className={classes.search__bar__auto}
        endAdornment={
          <InputAdornment position="end" onClick={(e) => handleSubmit(e)}>
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

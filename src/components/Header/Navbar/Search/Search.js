import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchFeild from "./Searchfeild/SearchFeild";
import Art1 from "../../../../Assets/art1.jpg";
import Art2 from "../../../../Assets/art2.jpg";
import Art3 from "../../../../Assets/art3.jpg";
import classes from "./Search.module.css";
import { borderRadius } from "@mui/system";

const Search = () => {
  const [data, useData] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "This is the description for product 1",
      image: Art1,
      category: "x",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is the description for product 2",
      image: Art2,
      category: "x",
    },
    {
      id: 2,
      name: "Product 3",
      description: "This is the description for product 3",
      image: Art3,
      category: "y",
    },
  ]);

  return (
    <Autocomplete
      id="combo-box-demo"
      freeSolo
      sx={{
        "& input": {
          boxShadow: " 0 0 10px rgba(0,0,0,0.25)",
        },
        "& div": {
          borderRadius: "20px",
          padding: "0 !important",
        },
      }}
      className={classes.search__bar__auto}
      options={data}
      groupBy={(option) => option.category}
      renderOption={(option) => <SearchFeild {...option} />}
      renderInput={(params) => (
        <TextField
          {...params}
          label
          style={{ padding: "0", borderRadius: "20px" }}
        />
      )}
    />
  );
};

export default Search;

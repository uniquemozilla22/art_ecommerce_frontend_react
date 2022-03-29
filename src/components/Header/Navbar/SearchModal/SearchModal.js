import React, { useState, useEffect } from "react";
import classes from "./SearchModal.module.css";
import { Modal, Fade, Box, OutlinedInput, InputAdornment } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";
const SearchModal = (props) => {
  const [searchShow, setSearchShow] = useState(props.show);

  const handleSearch = () => {
    setSearchShow(false);
    props.toggleSearch();
  };

  useEffect(() => {
    setSearchShow(props.show);
  }, [props.show]);

  const [search, setSearch] = useState();
  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigation("search", { state: { search } });
    handleSearch();
  };
  const handleChange = (e) => setSearch(e.target.value);

  return (
    <Modal
      open={searchShow}
      onClose={handleSearch}
      BackdropProps={{
        timeout: 200,
      }}
    >
      <Fade in={searchShow}>
        <Box className={classes.search__modal__container}>
          <OutlinedInput
            id="SearchBar"
            className={classes.search__bar__modal}
            endAdornment={
              <InputAdornment position="end" onClick={(e) => handleSubmit(e)}>
                <SearchOutlined />
              </InputAdornment>
            }
            autoFocus
            onChange={handleChange}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default SearchModal;

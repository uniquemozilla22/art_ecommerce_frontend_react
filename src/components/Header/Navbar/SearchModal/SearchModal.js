import React, { useState, useEffect } from "react";
import classes from "./SearchModal.module.css";
import { Modal, Fade, Box, OutlinedInput, InputAdornment } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
const SearchModal = (props) => {
  const [searchShow, setSearchShow] = useState(props.show);

  const handleSearch = () => {
    setSearchShow(false);
    props.toggleSearch();
  };

  useEffect(() => {
    setSearchShow(props.show);
  }, [props.show]);

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
              <InputAdornment position="end">
                <SearchOutlined />
              </InputAdornment>
            }
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default SearchModal;

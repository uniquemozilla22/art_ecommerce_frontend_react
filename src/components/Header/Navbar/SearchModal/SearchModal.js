import React, { useState, useEffect } from "react";
import classes from "./SearchModal.module.css";
import { Modal, Fade, Box, OutlinedInput, InputAdornment } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import SearchProducts from "../../../../store/actions/Search/SearchProducts.fetch";
import { Spinner } from "react-bootstrap";
import ProductTable from "../../../ProductTable/ProductTable";
import ProductItem from "../../../ProductTable/ProductItem/ProductItem";
import AddWishlistItem from "../../../../store/actions/Wishlist/wishlistItem.post";
const SearchModal = (props) => {
  const [searchShow, setSearchShow] = useState(props.show);
  const navigation = useNavigate();
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleSearch = () => props.toggleSearch();
  useEffect(() => {
    setSearchShow(props.show);
  }, [props.show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation("search", { state: { search } });
    handleSearch();
  };
  console.log(data);
  const debounce = (callback, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  const fetchData = debounce(async (text) => {
    const data = await dispatch(SearchProducts(text, false));
    setLoading(false);
    setData(data);
  }, 1000);
  const handleChange = (e) => {
    if (e.target.value.trim() !== "") {
      setSearch(e.target.value);
      setLoading(true);
      fetchData(e.target.value);
    }
  };

  return (
    <Modal
      open={searchShow}
      onClose={handleSearch}
      BackdropProps={{
        timeout: 200,
      }}
    >
      <Box className={classes.search__modal__container}>
        <form onSubmit={handleSubmit}>
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
          <input type="submit" className="d-none" />
        </form>
        {loading && <Spinner />}
        {data && (
          <>
            {data.length !== 0 && (
              <div className={classes.model_search}>
                {data.map((item, index) => {
                  console.log(item);
                    return (
                      <ProductItem
                        key={index}
                        id={item?.data.id}
                        image={item?.data.image_url}
                        name={item.data.name}
                        price={item.data.unit_price}
                        supplierName={
                          item.supplierInfo.first_name +
                          " " +
                          item.supplierInfo.last_name
                        }
                        supplierInfo={item.supplierInfo}
                        productData={item.data}
                        tags={item.tags}
                        category={item.category}
                        description={item.data.description}
                        wishlist 
                        wishlistFunction={() => {
                          props.toggleSearch();
                          dispatch(AddWishlistItem(item.data.id));
                        }}
                        modal={() => props.toggleSearch()}
                        likesCount={item.likesCount}
                        time={item?.auction?.expiration_date || null}
                        heading
                      />
                    )
                  );
                })}
              </div>
            )}
          </>
        )}
      </Box>
    </Modal>
  );
};

export default SearchModal;

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsContainer.module.css";
import FeatherIcon from "feather-icons-react";
import DataNotFound from "../DataNotFound/DataNotFound";
import {
  SORT_BY_NAME_ASCENDING,
  SORT_BY_NAME_DESCENDING,
  SORT_BY_PRICE_ASCENDING,
  SORT_BY_PRICE_DESCENDING,
  SORT_CATEGORY_BY_NAME_ASCENDING,
  SORT_CATEGORY_BY_NAME_DESCENDING,
  SORT_CATEGORY_BY_PRICE_ASCENDING,
  SORT_CATEGORY_BY_PRICE_DESCENDING,
} from "../../store/actions/Types/Types";
import { useDispatch } from "react-redux";

const ProductsContainer = ({
  filterHandler,
  data,
  fetchAllProducts,
  category,
}) => {
  const [sortingType, setSortingType] = useState(null);
  const sorting = [
    {
      name: "Sort By Name ( Ascending )",
      value: SORT_BY_NAME_ASCENDING,
    },
    {
      name: "Sort By Name ( Descending )",
      value: SORT_BY_NAME_DESCENDING,
    },
    {
      name: "Sort By Price (Low to High)",
      value: SORT_BY_PRICE_ASCENDING,
    },
    {
      name: "Sort By Price (High to Low)",
      value: SORT_BY_PRICE_DESCENDING,
    },
  ];

  const sortingData = (type, data) => {
    switch (type) {
      case SORT_BY_NAME_ASCENDING: {
        return data.sort((a, b) =>
          a.data.name > b.data.name ? 1 : b.data.name > a.data.name ? -1 : 0
        );
      }
      case SORT_BY_NAME_DESCENDING: {
        return data.sort((a, b) =>
          a.data.name < b.data.name ? 1 : b.data.name < a.data.name ? -1 : 0
        );
      }
      case SORT_BY_PRICE_ASCENDING: {
        return data.sort((a, b) =>
          a.data.unit_price > b.data.unit_price
            ? 1
            : b.data.unit_price > a.data.unit_price
            ? -1
            : 0
        );
      }
      case SORT_BY_PRICE_DESCENDING: {
        return data.sort((a, b) =>
          a.data.unit_price < b.data.unit_price
            ? 1
            : b.data.unit_price < a.data.unit_price
            ? -1
            : 0
        );
      }
      case null: {
        return data;
      }
      default:
        return data;
    }
  };
  const dataConversion = (d, type) => {
    if (!d) {
      return <DataNotFound action={fetchAllProducts} />;
    } else {
      return sortingData(type, data).map((product, index) => {
        return (
          <div className={"col-lg-3 col-md-4 col-xs-12 col-6"}>
            {
              <ProductCard
                key={index}
                id={product.data.id}
                productData={product.data}
                supplier={product.supplierInfo}
                time={product.auction?.expiration_date}
                auction={product.auction ? product.auction : null}
                category={product.category}
                delay={index}
                currentBid={product.currentBid}
                likes={product.likesCount}
                tags={product.tags}
                addToCart={(data) => console.log(data)}
              />
            }
          </div>
        );
      });
    }
  };

  const handleChange = (e) => {
    setSortingType(e.target.value);
  };
  return (
    <div className={classes.products__grid__container}>
      <div className={classes.sorting__place__container}>
        <div className={classes.sort__container}>
          <div>
            <FeatherIcon
              icon={"filter"}
              onClick={(e) => filterHandler()}
              className={"d-md-none " + classes.filter__icon}
            />
          </div>

          <div className={classes.sort}>
            <p>Sort</p>
            <Form.Select
              size="sm"
              className={classes.sort__selection}
              onChange={(e) => handleChange(e)}
            >
              <option selected disabled>
                Choose an Option
              </option>
              {sorting.map((option) => (
                <option value={option.value}>{option.name}</option>
              ))}
            </Form.Select>
          </div>
        </div>
      </div>

      <div className={classes.resulting__products__container}>
        <div className="row">{dataConversion(data, sortingType)}</div>
      </div>
    </div>
  );
};

export default ProductsContainer;

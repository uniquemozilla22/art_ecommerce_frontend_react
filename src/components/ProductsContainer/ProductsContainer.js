import React from "react";
import { Form } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsContainer.module.css";
import art1 from "../../Assets/art1.jpg";
import art2 from "../../Assets/art2.jpg";
import art3 from "../../Assets/art3.jpg";
import FeatherIcon from "feather-icons-react";
import DataNotFound from "../DataNotFound/DataNotFound";

const ProductsContainer = ({ filterHandler, data, fetchAllProducts }) => {
  const dataConversion = (d) => {
    console.log(d);
    if (!d) {
      return <DataNotFound action={fetchAllProducts} />;
    } else {
      return d.map((product, index) => {
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
            <Form.Select size="sm" className={classes.sort__selection}>
              <option>Small select</option>
              <option>Small select Option</option>
              <option>Small select</option>
              <option>Small select</option>
            </Form.Select>
          </div>
        </div>
      </div>

      <div className={classes.resulting__products__container}>
        <div className="row">{dataConversion(data)}</div>
      </div>
    </div>
  );
};

export default ProductsContainer;

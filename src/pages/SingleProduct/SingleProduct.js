import React, { useEffect, useState } from "react";
import classes from "./SingleProduct.module.css";
import ProductInformation from "../../components/ProductInformation/ProductInformation";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import { useLocation, useParams } from "react-router";
import SingleProductFetchData from "../../store/actions/products/singleProduct.fetch";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import DataNotFound from "../../components/DataNotFound/DataNotFound";

const SingleProduct = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    const data = await dispatch(SingleProductFetchData(id));
    setProduct(data);
  };

  return (
    <div className={classes.product__page}>
      <div className="container">
        {product ? (
          <>
            <ProductInformation
              id={product.data.id}
              productData={product.data}
              supplier={product.supplierInfo}
              time={product.auction?.expiration_date}
              auction={product.auction ? product.auction : null}
              category={product.category}
              currentBid={product.currentBid}
              likes={product.likesCount}
              tags={product.tags}
            />
            <ProductDescription
              description={
                product.data.description
                  ? product.data.description
                  : "No description"
              }
              additionalInformation={
                product.data.additional_information
                  ? product.data.additional_information
                  : "No Additional Information"
              }
            />
          </>
        ) : (
          <DataNotFound
            action={() => fetchData(id)}
            content={"There is no Data . Try Again"}
          />
        )}
        {/* <ProductSection title={"Trending Products"} products={data} /> */}
      </div>
    </div>
  );
};

export default SingleProduct;

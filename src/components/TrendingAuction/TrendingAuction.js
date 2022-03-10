import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductSection from "../ProductSection/ProductSection";

const TrendingAuction = () => {
  const trendingAuctions = useSelector(
    (state) => state.product.trendingAuctions
  );
  const [data, setData] = useState(trendingAuctions);

  useEffect(() => {}, []);

  return (
    <>
      <ProductSection title="Trending Auctions" />
    </>
  );
};

export default TrendingAuction;

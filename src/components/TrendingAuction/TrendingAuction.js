import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTrendingAuctions from "../../store/actions/products/trending.fetch";
import DataNotFound from "../DataNotFound/DataNotFound";
import ProductSection from "../ProductSection/ProductSection";

const TrendingAuction = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchTrendingAuction();
  }, []);

  const fetchTrendingAuction = async () => {
    const fetchData = await dispatch(fetchTrendingAuctions());
    setData(fetchData);
  };

  return data ? (
    <>
      <ProductSection title="Trending Products" products={data} />
    </>
  ) : (
    <DataNotFound
      action={fetchTrendingAuction}
      content={"Trending Auctions not found"}
    />
  );
};

export default TrendingAuction;

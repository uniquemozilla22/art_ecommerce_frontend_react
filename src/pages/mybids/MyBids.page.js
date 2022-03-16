import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BiddingTable from "../../components/BiddingTable/BiddingTable";
import FetchAllBids from "../../store/actions/Bid/bid.fetch";

const MyBids = () => {
  const [data, setData] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const fetch = await dispatch(FetchAllBids());
    setData(fetch);
  };

  return (
    <div className="container">
      <BiddingTable data={data} />
    </div>
  );
};

export default MyBids;

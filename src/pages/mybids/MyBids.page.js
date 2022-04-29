import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BiddingTable from "../../components/BiddingTable/BiddingTable";
import FetchAllBids from "../../store/actions/Bid/bid.fetch";
import DataNotFound from "../../components/DataNotFound/DataNotFound";

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
      {data && data.length !== 0 ? (
        <BiddingTable data={data} fetchdata={fetchdata} />
      ) : (
        <DataNotFound
          action={() => fetchdata()}
          content="Looks like you have not bid on any arts. Try Bidding on some product."
        />
      )}
    </div>
  );
};

export default MyBids;

import React from "react";
import BiddingItem from "./Item/BiddingItem.comp";
import classes from "./BiddingTable.module.css";
import DataNotFound from "../DataNotFound/DataNotFound";
import { Refresh } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const BiddingTable = ({ data, fetchdata }) => {
  console.log(data);
  return data ? (
    <>
      <div className={classes.bids__container}>
        {data?.filter(
          (items) =>
            new Date(items.auction.expiration_date).getTime() -
              new Date().getTime() >
            0
        ).length > 0 ? (
          <>
            <div className={classes.title__container}>
              <h1 className={classes.title}>Current Bids</h1>
              <Tooltip title="Refresh List">
                <Refresh onClick={(e) => fetchdata()} />
              </Tooltip>
            </div>
            {data
              ?.filter(
                (items) =>
                  new Date(items.auction.expiration_date).getTime() -
                    new Date().getTime() >
                  0
              )
              .map((item, index) => (
                <BiddingItem key={index} {...item} />
              ))}
          </>
        ) : null}

        {data?.filter(
          (items) =>
            new Date(items.auction.expiration_date).getTime() -
              new Date().getTime() <
            0
        ).length > 0 ? (
          <>
            <h1 className={classes.title}>Expired Bids</h1>
            {data
              ?.filter(
                (items) =>
                  new Date(items.auction.expiration_date).getTime() -
                    new Date().getTime() <
                  0
              )
              .map((item, index) => (
                <BiddingItem key={index} {...item} />
              ))}
          </>
        ) : null}
      </div>
    </>
  ) : (
    <DataNotFound content={"Try Bidding on some products"} action={fetchdata} />
  );
};

export default BiddingTable;

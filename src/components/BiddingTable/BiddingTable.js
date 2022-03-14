import React, { useState } from "react";
import BiddingItem from "./Item/BiddingItem.comp";
import classes from "./BiddingTable.module.css";
import DataNotFound from "../DataNotFound/DataNotFound";
import { Modal } from "bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { WarningMessage } from "../../store/actions/Message/Message";
import BidOnProduct from "../../store/actions/Bid/BidOnProduct.post";

const BiddingTable = ({ data }) => {
 
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
            <h1 className={classes.title}>Current Bids</h1>
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
    <DataNotFound content={"Try Bidding on some products"} />
  );
};

export default BiddingTable;

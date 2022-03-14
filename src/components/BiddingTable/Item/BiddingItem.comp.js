import { Add, RemoveRedEyeSharp } from "@mui/icons-material";
import { Avatar, Toolbar, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./BiddingItem.module.css";
import { useDispatch } from "react-redux";
import { WarningMessage } from "../../../store/actions/Message/Message";
import BidOnProduct from "../../../store/actions/Bid/BidOnProduct.post";
import { Form, Modal } from "react-bootstrap";
const BiddingItem = ({
  data,
  auction,
  supplierInfo,
  category,
  price,
  currentBid,
}) => {
  const [times, setTimes] = useState("0");
  const time = setInterval(() => {
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = new Date(auction?.expiration_date).getTime() - now;

    // Time calculations for days, hours, minutes and seconds
    // Time calculations for days, hours, minutes and seconds
    let days =
      (Math.floor(distance / (1000 * 60 * 60 * 24)) > 0
        ? Math.floor(distance / (1000 * 60 * 60 * 24))
        : 0) + " days ";
    let hours =
      (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 0
        ? Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        : 0) + " hours ";
    let minutes =
      (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) > 0
        ? Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        : 0) + " min ";
    let seconds =
      (Math.floor((distance % (1000 * 60)) / 1000) > 0
        ? Math.floor((distance % (1000 * 60)) / 1000)
        : 0) + " sec ";

    setTimes(days + hours + minutes + seconds);
  }, 1000);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const showModel = () => setOpen(true);
  const hideModel = () => setOpen(false);

  const [bidAmount, setBidAmount] = useState(0);

  const handleChange = (e) => {
    setBidAmount(e.target.value);
  };

  const onSubmitBidAmount = (e) => {
    e.preventDefault();
    if (bidAmount <= currentBid.price) {
      dispatch(
        WarningMessage({
          message: "Bid cannot be less than or equal to the current price.",
        })
      );
    } else {
      dispatch(BidOnProduct(auction.id, bidAmount));
    }
  };
  const navigation = useNavigate();

  const gotoNavigation = () => navigation("/products/" + data.id);

  return (
    <>
      <div className={classes.bidding__component + " " + classes.highest__user}>
        <div className={classes.product__container}>
          <img src={data.image_url} alt={data.name} />
          <div className={classes.contentContainer}>
            <h1>{data.name}</h1>
            <h2>{data.description}</h2>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </div>
        </div>
        <div className={classes.status__container}>
          <div className={classes.highest__avatar}>
            <Avatar>{currentBid.first_name.charAt(0)}</Avatar>
            <p>
              {currentBid.first_name + " " + currentBid.last_name.charAt(0)}.
            </p>
          </div>
          <p>{times}</p>
        </div>
        <div className={classes.actions__container}>
          <p>
            <span>Your Bid :</span> NRS.{price}
          </p>
          <div className={classes.icons__container + " d-none d-lg-flex"}>
            <Tooltip title={"See " + data.name}>
              <RemoveRedEyeSharp size="sm" onClick={(e) => gotoNavigation()} />
            </Tooltip>
            <Tooltip title={"See " + data.name} onClick={(e) => showModel()}>
              <Add size="sm" />
            </Tooltip>
          </div>
          <div className={classes.button__container + " d-flex d-lg-none"}>
            <button>
              <RemoveRedEyeSharp size="sm" onClick={(e) => gotoNavigation()} />
              See Product
            </button>
            <button>
              <Add size="sm" />
              Add Amount
            </button>
          </div>
        </div>
      </div>
      <Modal
        show={open}
        centered
        keyboard={false}
        onHide={hideModel}
        className={classes.model}
      >
        <div className={classes.bidding__container}>
          <p>
            Choose your Maximum Bid* <span>How Bidding Works ?</span>
          </p>
          <form onSubmit={onSubmitBidAmount} className={classes.bid__form}>
            <Form.Control
              size="md"
              type="number"
              min={currentBid.price}
              className={classes.form__selection}
              placeholder={"Enter amount to bid"}
              onChange={(e) => handleChange(e)}
            />
            <input type="submit" />
          </form>

          <p>
            This amount excludes shipping fees, applicable taxes, and will have
            a Buyer's Premium based on the hammer price of the lot: Buyer's
            Premium.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default BiddingItem;

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
  winStatus,
}) => {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [mins, setMins] = useState(null);
  const [sec, setSec] = useState(null);

  const time = setInterval(() => {
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = new Date(auction?.expiration_date).getTime() - now;
    // Time calculations for days, hours, minutes and seconds
    // Time calculations for days, hours, minutes and seconds
    setDays(
      Math.floor(distance / (1000 * 60 * 60 * 24)) > 0
        ? Math.floor(distance / (1000 * 60 * 60 * 24))
        : null
    );

    setHours(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 0
        ? Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        : null
    );
    setMins(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) > 0
        ? Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        : null
    );
    setSec(
      Math.floor((distance % (1000 * 60)) / 1000) > 0
        ? Math.floor((distance % (1000 * 60)) / 1000)
        : null
    );
  }, 1000);

  const timed = (days, mins, hour, sec) => {
    if (days) {
      days = days + " d ";
    } else {
      days = "";
    }
    if (mins) {
      mins = mins + " m ";
    } else {
      mins = "";
    }
    if (hour) {
      hour = hour + " h ";
    } else {
      hour = "";
    }
    if (sec) {
      sec = sec + " s ";
    } else {
      sec = 0;
    }
    return days + hour + mins + sec;
  };

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
    if (parseInt(price) + parseInt(bidAmount) <= parseInt(currentBid.price)) {
      console.log(parseInt(price) + parseInt(bidAmount));
      dispatch(
        WarningMessage({
          message: "You should add a winning amount.",
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
      <div
        className={
          classes.bidding__component +
          " " +
          (winStatus ? classes.highest__user : classes.losing_user)
        }
      >
        <div className={classes.product__container}>
          <img src={data.image_url} alt={data.name} />
          <div className={classes.contentContainer}>
            <h1>{data.name}</h1>
            <h2>{data.description}</h2>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </div>
        </div>
        <div className={classes.highest__avatar}>
          <p className={classes.title}>Highest</p>
          <Avatar style={{ height: "30px", width: "30px" }}>
            {currentBid.first_name.charAt(0)}
          </Avatar>
          <p>{currentBid.first_name + " " + currentBid.last_name.charAt(0)}.</p>
        </div>
        <div className={classes.status__container}>
          <p>
            Current
            <span> {currentBid.price.toLocaleString("en-IN")}</span>
          </p>

          <p className={classes.time}>{timed(days, mins, hours, sec)}</p>
        </div>
        <div className={classes.actions__container}>
          <p>
            Your Bid<span> {price.toLocaleString("en-IN")}</span>
          </p>
          <div className={classes.icons__container + " d-none d-lg-flex"}>
            <Tooltip title={"See " + data.name}>
              <RemoveRedEyeSharp size="sm" onClick={(e) => gotoNavigation()} />
            </Tooltip>
            <Tooltip
              title={"Add Bid Amount to " + data.name}
              onClick={(e) => showModel()}
            >
              <Add size="sm" />
            </Tooltip>
          </div>
          <div className={classes.button__container + " d-flex d-lg-none"}>
            <button onClick={(e) => gotoNavigation()}>
              <RemoveRedEyeSharp size="sm" />
              See Product
            </button>
            <button onClick={(e) => showModel()}>
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
          <h5>Add Amount</h5>
          <p>
            Add the amount to your previous bid *
            <span>How Bidding Works ?</span>
          </p>
          <form onSubmit={onSubmitBidAmount} className={classes.bid__form}>
            <Form.Control
              size="md"
              type="number"
              min={0}
              className={classes.form__selection}
              placeholder={"Add amount to increase Bid"}
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

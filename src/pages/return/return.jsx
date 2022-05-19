import React, { useState } from "react";
import classes from "./return.module.css";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import ReturnItem from "./ReturnItem/ReturnItem";
const Sidebar = () => {
  return (
    <>
      <div className={classes.return}>
        <div className="container">
          <div className="row">
            <h2>Return and Refund</h2>
            <div className="col-lg-6">
              <p>
                <b>How to return a Product</b>
              </p>

              <ReturnItem
                index={1}
                topic=" Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
              />
              <ReturnItem
                index={2}
                topic=" Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
              />
              <ReturnItem
                index={3}
                topic=" Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
              />
            </div>
            <div className="col-lg-6">
              <animated.div className={classes.refundBox}>
                <p>
                  <b>How to get Refund from a Product?</b>
                </p>
                <ol>
                  <li>
                    {" "}
                    The product must be unused, unworn, unwashed and without any
                    flaws. Fashion products can be tried on to see if they fit
                    and will still be considered unworn. If a product is
                    returned to us in an inadequate condition, we reserve the
                    right to send it back to you.
                  </li>
                  <li>
                    {" "}
                    The product must include the original tags, user manual,
                    warranty cards, freebies and accessories.
                  </li>
                  <li>
                    The product must be returned in the original and undamaged
                    manufacturer packaging / box. If the product was delivered
                    in a second layer of Daraz packaging, it must be returned in
                    the same condition with return shipping label attached. Do
                    not put tape or stickers on the manufacturers box..{" "}
                  </li>
                </ol>

                <p>
                  <b>Other Links</b>
                </p>
                <ul className={classes.LinkList}>
                  <li>
                    <Link to="./"> Frequntly Asked Questions (FAQ)</Link>
                  </li>
                  <li>
                    <Link to="./">Warranty Policy</Link>
                  </li>
                  <li>
                    <Link to="./">Contact Lists</Link>
                  </li>
                </ul>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

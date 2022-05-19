import React from "react";
import classes from "./sidebar.module.css";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="filterBar">
        <h3 className={classes.filterHeading}>Filter </h3>
        <ul className={classes.filterList}>
          <animated.li>
            <FeatherIcon icon="eye" /> <span>View All</span>
          </animated.li>
          <animated.li>
            <FeatherIcon icon="list" /> <span>Products</span>
          </animated.li>
          <animated.li>
            <FeatherIcon icon="users" /> <span>Artist</span>
          </animated.li>
        </ul>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Category</Accordion.Header>
            <Accordion.Body>
              <ul className={classes.categoryDropdown}>
                <animated.li>
                  <Link to="/dashboard" className="w-100">
                    Category 1
                  </Link>
                </animated.li>
                <animated.li>
                  <Link to="/dashboard" className="w-100">
                    Category 2
                  </Link>
                </animated.li>
                <animated.li>
                  <Link to="/dashboard" className="w-100">
                    Category 3
                  </Link>
                </animated.li>
                <animated.li>
                  <Link to="/dashboard" className="w-100">
                    Category 4
                  </Link>
                </animated.li>
                <animated.li>
                  <Link to="/dashboard" className="w-100">
                    Category 5
                  </Link>
                </animated.li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Tags</Accordion.Header>
            <Accordion.Body>
              <ul className={classes.tagsList}>
                <li>Tag 1</li>
                <li>Tag 1</li>
                <li>Tag 1</li>
                <li>Tag 1</li>
                <li>Tag 1</li>
                <li>Tag 1</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Sidebar;

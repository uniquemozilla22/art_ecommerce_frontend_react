import React, { useState } from "react";
import classes from "./blog.module.css";
import Sidebar from "../sidebar/sidebar";
import BlogGrid from "./bloggrid/blogGrid";
import BlogList from "./blogList/bloglist";

import FeatherIcon from "feather-icons-react";

const Blog = () => {
  const [isList, setIsList] = useState(false);

  const handleShowList = () => setIsList(true);
  const handleShowGrid = () => setIsList(false);

  return (
    <>
      <div className={classes.blogPage}>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-2">
              <Sidebar />
            </div>
            <div className="col-lg-10">
              <div className="row m-0 p-0">
                <div className={classes.sortSection}>
                  <span>Sort By</span>
                  <select className={classes.selectDropdown}>
                    <option>Top Rated</option>
                  </select>
                </div>
              </div>
              <div className="row m-0 p-0">
                <div className={classes.sortSection}>
                  <FeatherIcon
                    className={isList ? classes.active__icon : classes.sortIcon}
                    icon="list"
                    onClick={() => handleShowList()}
                  />
                  <FeatherIcon
                    className={
                      !isList ? classes.active__icon : classes.sortIcon
                    }
                    icon="grid"
                    onClick={() => handleShowGrid()}
                  />
                </div>
              </div>
              <div className="row">
                {!isList ? (
                  <div className="col-lg-4 col-sm-6 col-12">
                    <BlogGrid />
                  </div>
                ) : (
                  <div className="col-12">
                    <BlogList />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

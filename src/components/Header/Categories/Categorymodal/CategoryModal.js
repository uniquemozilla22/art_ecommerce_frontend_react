import React from "react";
import classes from "./CategoryModal.module.css";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const CategoryModalList = ({ name, id, subCategory }) => {
  if (subCategory) {
    return (
      <div
        className={
          classes.category__list__modal + " " + classes.category__moreList
        }
      >
        <Accordion>
          <Accordion.Item eventKey="0" className={classes.accordiionItem}>
            <Accordion.Header className={classes.header__titleAccordion}>
              {name}
            </Accordion.Header>
            <Accordion.Body className={classes.moreList__body}>
              {subCategory.map((category) => (
                <SubCategoryList {...category} />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  } else {
    return (
      <div className={classes.category__list__modal}>
        <Link to={`category/${id}`}>{name}</Link>
      </div>
    );
  }
};

const SubCategoryList = ({ name, id, subCategory }) => {
  if (subCategory) {
    return (
      <div
        className={
          classes.subcategory__list__modal + " " + classes.category__submoreList
        }
      >
        <Accordion>
          <Accordion.Item eventKey="0" className={classes.accordiionItem}>
            <Accordion.Header className={classes.header__titleAccordion}>
              {name}
            </Accordion.Header>
            <Accordion.Body className={classes.moreList__body}>
              {subCategory.map((category) => (
                <SubCategoryList {...category} />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  } else {
    return (
      <div className={classes.subcategory__list__modal}>
        <Link to={`category/${id}`}>{name}</Link>
      </div>
    );
  }
};

export default CategoryModalList;

import React, { useState, useEffect } from "react";
import classes from "./Categories.module.css";
import CategoryList from "./CategoryList";
import { Offcanvas } from "react-bootstrap";
import { connect } from "react-redux";

const Categories = (props) => {
  const [show, setShow] = useState(props.modal.category);

  const handleCloseCategory = (e) => {
    setShow(false);
    props.toggleCategories();
  };

  useEffect(() => {
    setShow(props.modal.category);
  }, [props.modal.category]);

  return (
    <>
      <div className={classes.categories__container}>
        <div className={"container-fluid " + classes.category__lists}>
          {props.data.map((category) => (
            <CategoryList {...category} />
          ))}
        </div>
      </div>
      <Offcanvas show={show} onHide={(e) => handleCloseCategory(e)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return { ...state, ...ownProps };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleCategories: () => dispatch({ type: "CATEGORY" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);

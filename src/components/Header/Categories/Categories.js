import React, { useState, useEffect } from "react";
import classes from "./Categories.module.css";
import CategoryList from "./CategoryList";
import { Offcanvas } from "react-bootstrap";
import { connect } from "react-redux";
import CategoryModalList from "./Categorymodal/CategoryModal";

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
          <Offcanvas.Title className={classes.headerTitle}>
            Categories.
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={classes.categories__modal__body}>
            {props.data.map((category) => (
              <CategoryModalList {...category} />
            ))}
          </div>
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

import React, { useState, useEffect } from "react";
import classes from "./Categories.module.css";
import CategoryList from "./CategoryList";
import { Offcanvas } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import CategoryModalList from "./Categorymodal/CategoryModal";
import FetchCategories from "../../../store/actions/FetchData/Categories.fetch";

const Categories = (props) => {
  const [show, setShow] = useState(props.modal.category);

  const handleCloseCategory = (e) => {
    setShow(false);
    props.toggleCategories();
  };

  useEffect(() => {
    setShow(props.modal.category);
  }, [props.modal.category]);

  const dispatch = useDispatch();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const categories = await dispatch(FetchCategories());
    setCategory(categories);
  };

  return category ? (
    <>
      <div className={classes.categories__container}>
        <div className={"container-fluid " + classes.category__lists}>
          {category.map((c, index) => (
            <CategoryList {...c} key={index} />
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
            {category.map((c, index) => (
              <CategoryModalList {...c} key={index} />
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  ) : null;
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

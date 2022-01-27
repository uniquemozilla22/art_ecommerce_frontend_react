import React from "react";
import art1 from "../../Assets/art1.jpg";
import classes from "./ProductInformation.module.css";
import supplierImage from "../../Assets/artist1.png";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const ProductInformation = (props) => {
  const { image, name, price, supplier, like, tags, categories } = props;
  return (
    <div className={"row " + classes.product__information__container}>
      <div className={"col-6 " + classes.image__container}>
        <img src={image} alt={name} />
      </div>
      <div className={"col-6"}>
        <div className={classes.information__content__container}>
          <div className={classes.supplier__information}>
            <h3 className={classes.supplier_heading}>Artist Information</h3>
            <div className={classes.supplierAvatar}>
              <div className={classes.supplierAvatar__img}>
                <img src={supplierImage} alt={supplier} />
              </div>
              <div className={classes.supplierAvatar_content}>
                <h1>
                  Phurba Gurung <span>Edition:18/20</span>
                </h1>
                <h2>Abstract Artist</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </p>
              </div>
            </div>
            <hr />
            <div className={classes.product__info}>
              <h1>{name}</h1>
              <h2>NPR. {price}</h2>
              <p> 28 x 21 in. ( 71.12 x 53.34 cm )</p>
              <p> Frame: 28 x 21 in. ( 71.12 x 53.34 cm )</p>
              <p> Signed , Dated and Numbered in Pencil</p>
            </div>

            <div className={classes.like__container}>
              <FeatherIcon icon="heart" />
              <p>{like}</p>
            </div>

            <div className={classes.buttons__container}>
              <div
                className={classes.add_to_cart}
                onClick={(e) => console.log("Added to Cart")}
              >
                <FeatherIcon icon="shopping-cart" />
                <p>Add to cart</p>
              </div>
              <div
                className={classes.add_to_wishlist}
                onClick={(e) => console.log("Added to Cart")}
              >
                <FeatherIcon icon="heart" />
                <p>Wishlist</p>
              </div>
              <div></div>
            </div>

            <hr />

            <div className={classes.tags}>
              <h1>Tags</h1>
              <div className={classes.tag__container}>
                {tags.map((tag) => (
                  <Link to={`/tag:${tag}`}>{tag}</Link>
                ))}
              </div>
            </div>
            <div className={classes.categories}>
              <h1>Categories</h1>
              <div className={classes.categories__container}>
                {categories.map((tag) => (
                  <Link to={`/tag:${tag}`}>{tag}</Link>
                ))}
              </div>
              <div className={classes.share}>
                <h1>Share</h1>
                <div className={classes.icons__container}>
                  <div className={classes.icon}>
                    <FeatherIcon icon="facebook" />
                  </div>
                  <div className={classes.icon}>
                    <FeatherIcon icon="twitter" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;

import React from "react";
import classes from "./ProductInformation.module.css";
import supplierImage from "../../Assets/artist1.png";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export const ProductInformation = (props) => {
  const { image, name, price, supplier, like, tags, categories } = props;
  return (
    <div className={"row " + classes.product__information__container}>
      <div
        className={
          "col-12 col-sm-12 col-md-12 col-lg-6 " + classes.image__container
        }
      >
        <img src={image} alt={name} />
      </div>

      <div
        className={
          "col-12 col-sm-12 col-md-12 col-lg-6 " + classes.content__container
        }
      >
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
            </div>

            <hr />

            <div className={classes.tags}>
              <h1>Tags</h1>
              <div className={classes.tag__container}>
                {tags.map((tag, index) => (
                  <Link key={index} to={`/tag:${tag}`}>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            <div className={classes.categories}>
              <h1>Categories</h1>
              <div className={classes.categories__container}>
                {categories.map((tag, index) => (
                  <Link key={index} to={`/tag:${tag}`}>
                    {tag}
                  </Link>
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

export const BiddingInformation = (props) => {
  const {
    image,
    name,
    price,
    supplier,
    like,
    tags,
    categories,
    time,
    highestbidder,
    highestbidderImage,
  } = props;

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = new Date(time).getTime() - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return (
    <div className={"row " + classes.product__information__container}>
      <div
        className={
          "col-12 col-sm-12 col-md-12 col-lg-6 " + classes.image__container
        }
      >
        <img src={image} alt={name} />
      </div>

      <div
        className={
          "col-12 col-sm-12 col-md-12 col-lg-6 " + classes.content__container
        }
      >
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
              </div>
            </div>
            <hr />
            <div className={classes.product__info}>
              <h1>{name}</h1>
              <div className={classes.bidding__information}>
                <p>
                  Ending :
                  <span>
                    {days} days {hours} hours {minutes} mins
                  </span>
                </p>
                <p>
                  Estimate:<span> NPR. 12000 - NPR. 20000</span>
                </p>
                <p>
                  Current Bid:
                  <span>
                    NPR. 14000
                    <div className={classes.currentHighBidder}>
                      <img src={highestbidderImage} alt={highestbidder} />
                      <h3>{highestbidder}</h3>
                    </div>
                  </span>
                </p>
              </div>
              <p> 28 x 21 in. ( 71.12 x 53.34 cm )</p>
              <p> Frame: 28 x 21 in. ( 71.12 x 53.34 cm )</p>
              <p> Signed , Dated and Numbered in Pencil</p>
            </div>
            <div className={classes.bidding__container}>
              <p>
                Choose your Maximum Bid* <span>How Bidding Works ?</span>
              </p>
              <Form.Select size="md" className={classes.form__selection}>
                <option>14000</option>
                <option>15000</option>
                <option>16000</option>
                <option>17000</option>
                <option>18000</option>
                <option>19000</option>
                <option>20000</option>
              </Form.Select>
              <p>
                This amount excludes shipping fees, applicable taxes, and will
                have a Buyer's Premium based on the hammer price of the lot:
                Buyer's Premium.
              </p>
            </div>
            <div className={classes.buttons__container}>
              <div className={classes.like__container}>
                <FeatherIcon icon="heart" />
                <p>{like}</p>
              </div>
              <div
                className={classes.add_to_wishlist}
                onClick={(e) => console.log("Added to Cart")}
              >
                <FeatherIcon icon="heart" />
                <p>Wishlist</p>
              </div>
            </div>

            <hr />

            <div className={classes.tags}>
              <h1>Tags</h1>
              <div className={classes.tag__container}>
                {tags.map((tag, index) => (
                  <Link key={index} to={`/tag:${tag}`}>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            <div className={classes.categories}>
              <h1>Categories</h1>
              <div className={classes.categories__container}>
                {categories.map((tag, index) => (
                  <Link key={index} to={`/tag:${tag}`}>
                    {tag}
                  </Link>
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

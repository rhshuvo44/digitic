import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const ProductCard = () => {
  const ratting = 3;
  return (
    <div className="col-3">
      <Link to="/single" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link to="/">
            <img src="images/wish.svg" alt="" />
          </Link>
        </div>
        <div className="product-img">
          <img src="images/tab.jpg" alt="" className="img-fluid" />
          <img src="images/tab1.jpg" alt="" className="img-fluid" />
        </div>
        <div className="product-details">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title">Lorem ipsum dolor sit amet.</h5>
          <StarRatingComponent
            starCount={5}
            name="rate1"
            edit={false}
            value={ratting}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to="/">
              <img src="images/prodcompare.svg" alt="" />
            </Link>
            <Link to="/">
              <img src="images/view.svg" alt="" />
            </Link>
            <Link to="/">
              <img src="images/add-cart.svg" alt="" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

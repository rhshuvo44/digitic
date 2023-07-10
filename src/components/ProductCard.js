import React from "react";
import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductCard = ({ grid }) => {
  let location = useLocation();
  return (
    <div
      className={`${location?.pathname === "/store" ? `col-${grid}` : "col-3"}`}
    >
      <Link to="/product/:id" className="product-card position-relative">
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
          <h5 className="product-title">
            Kids Headphones Bulk 10 Pack Multi Colored For Students
          </h5>
          <StarRatings
            rating={3}
            starRatedColor="#ffd700"
            numberOfStars={5}
            name="rating"
            starSpacing="2px"
            starDimension="15px"
          />
          <p className="disc">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt...
          </p>
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

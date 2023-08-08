import React from "react";
import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductCard = ({ grid, product }) => {
  const {
    _id,
    title,
    slug,
    description,
    price,
    category,
    brand,
    quantity,
    sold,
    color,
    tags,
    totalrating,
    images,
    ratings,
    createdAt,
    updatedAt,
  } = product;
  let location = useLocation();
  return (
    <div
      className={`${location?.pathname === "/store" ? `col-${grid}` : "col-3"}`}
    >
      <Link to={`/product/${_id}`} className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src="images/wish.svg" alt="" />
          </button>
        </div>
        <div className="product-img">
          <img src="images/tab.jpg" alt="" className="img-fluid" />
          <img src="images/tab1.jpg" alt="" className="img-fluid" />
        </div>
        <div className="product-details">
          <h6 className="brand">{brand}</h6>
          <h5 className="product-title">{title}</h5>
          <StarRatings
            rating={3}
            starRatedColor="#ffd700"
            numberOfStars={5}
            name="rating"
            starSpacing="2px"
            starDimension="15px"
          />
          <p className="disc">
            {description}
          </p>
          <p className="price">${price}</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src="images/prodcompare.svg" alt="" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="images/view.svg" alt="" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="images/add-cart.svg" alt="" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

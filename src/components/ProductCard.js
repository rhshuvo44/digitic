import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = ({ grid, product }) => {
  const {
    title,
    _id,
    // slug,
    description,
    price,
    // category,
    brand,
    // quantity,
    // sold,
    // color,
    // tags,
    totalrating,
    images,
    // ratings,
    // createdAt,
    // updatedAt,
  } = product;
  let location = useLocation();
  const dispatch = useDispatch();
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  return (
    <div
      className={`${location?.pathname === "/store" ? `col-${grid}` : "col-3"}`}
    >
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button
            className="border-0 bg-transparent"
            onClick={() => addToWish(_id)}
          >
            <img src="images/wish.svg" alt="" />
          </button>
        </div>
        <div className="product-img">
          <img src={images[0]?.url} alt="" className="img-fluid" />
          <img src="images/tab1.jpg" alt="" className="img-fluid" />
        </div>
        <div className="product-details">
          <h6 className="brand">{brand}</h6>
          <h5 className="product-title">{title}</h5>
          <StarRatings
            rating={Number(totalrating)}
            starRatedColor="#ffd700"
            numberOfStars={5}
            name="rating"
            starSpacing="2px"
            starDimension="15px"
          />
          <p
            className="disc"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <p className="price">${price}</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src="images/prodcompare.svg" alt="" />
            </button>
            <Link to={`/product/${_id}`} className="border-0 bg-transparent">
              <img src="images/view.svg" alt="" />
            </Link>
            <button className="border-0 bg-transparent">
              <img src="images/add-cart.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

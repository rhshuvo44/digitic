import React from "react";
import { Link } from "react-router-dom";
// import StarRatingComponent from "react-star-rating-component";

const SpecialProduct = () => {
  const ratting = 3;
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justity-content-between">
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">
              Samsung Galaxy Note10+ Mobile Phone; Sim...
            </h6>
            {/* <StarRatingComponent
              starCount={5}
              name="rate1"
              edit={false}
              value={ratting}
              activeColor="#ffd700" */}
            {/* /> */}
            <p className="price">
              <span className="red-p">$100.00</span> &nbsp;{" "}
              <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10">
                <span className="badge rounded-circle p-3 bg-warning">1</span>:
                <span className="badge rounded-circle p-3 bg-warning">1</span>:
                <span className="badge rounded-circle p-3 bg-warning">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  style={{ width: "25%" }}
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link to="/cart" className="button ">
              add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;

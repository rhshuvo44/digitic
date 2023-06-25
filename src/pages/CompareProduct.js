import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare - Digitic" />
      <BrandCrumb title="Compare" />;
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt=""
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;

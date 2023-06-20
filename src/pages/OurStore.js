import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const OurStore = () => {
  return (
    <>
      <Meta title="Our Store - Digitic" />
      <BrandCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div className="mt-4">
                  <ul>
                    <li>watch</li>
                    <li>Tv</li>
                    <li>camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By </h3>
                <div className="mt-4">
                  <h5 className="sub-title">Avillable</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="stock"
                      id="stock"
                    />
                    <label className="form-check-label" for="stock">
                      In stock (21)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="stockOut"
                      id="stockOut"
                    />
                    <label className="form-check-label" for="stockOut">
                      Out of stock (0)
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="sub-title">Price</h5>
                </div>
                <div>
                  <h5 className="sub-title">Color</h5>
                </div>
                <div>
                  <h5 className="sub-title">Size</h5>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;

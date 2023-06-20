import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";
import StarRatingComponent from "react-star-rating-component";

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
                    <label className="form-check-label" htmlFor="stock">
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
                    <label className="form-check-label" htmlFor="stockOut">
                      Out of stock (0)
                    </label>
                  </div>
                </div>

                <div className="mt-3">
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div class="form-floating mb-3">
                      <input
                        type="number"
                        class="form-control bg-light"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label for="floatingInput">From</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="number"
                        class="form-control bg-light"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label for="floatingInput1">To</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="sub-title">Color</h5>
                  <ul className="colors">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

                <div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="stock"
                        id="stock"
                      />
                      <label className="form-check-label" htmlFor="stock">
                        S (21)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="stock"
                        id="stock"
                      />
                      <label className="form-check-label" htmlFor="stock">
                        M (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="stock"
                        id="stock"
                      />
                      <label className="form-check-label" htmlFor="stock">
                        L (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="stock"
                        id="stock"
                      />
                      <label className="form-check-label" htmlFor="stock">
                        XL (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="stock"
                        id="stock"
                      />
                      <label className="form-check-label" htmlFor="stock">
                        XXL (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title mb-3">Product Tags</h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Oppo
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tablet
                  </span>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div className="mt-4">
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h4>Lorem ipsum dolor sit amet.</h4>
                      <StarRatingComponent
                        starCount={5}
                        edit={false}
                        value={3}
                        activeColor="#ffd700"
                      />
                      <p className="fw-bold">$100</p>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h4>Lorem ipsum dolor sit amet.</h4>
                      <StarRatingComponent
                        starCount={5}
                        edit={false}
                        value={3}
                        activeColor="#ffd700"
                      />
                      <p className="fw-bold">$100</p>
                    </div>
                  </div>
                </div>
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

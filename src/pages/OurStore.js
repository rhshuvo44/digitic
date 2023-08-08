import React, { useEffect } from "react";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import BrandCrumb from "../components/BrandCrumb";
import Colors from "../components/Colors";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

const OurStore = () => {
  const [grid, setGrid] = useState(3);
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.products?.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <Meta title="Our Store - Digitic" />
      <BrandCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
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
                  <div className="form-floating mb-3">
                    <CustomInput
                      type="number"
                      classname="bg-light"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <CustomInput
                      type="number"
                      classname="bg-light"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="sub-title">Color</h5>
                <Colors />
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
                    <img src="images/watch.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-50">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <StarRatings
                      rating={3}
                      starRatedColor="#ffd700"
                      numberOfStars={5}
                      name="rating"
                      starSpacing="2px"
                      starDimension="15px"
                    />
                    <p className="fw-bold">
                      <b>$ 100</b>
                    </p>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img src="images/watch.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-50">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <StarRatings
                      rating={3}
                      starRatedColor="#ffd700"
                      numberOfStars={5}
                      name="rating"
                      starSpacing="2px"
                      starDimension="15px"
                    />
                    <p className="fw-bold">
                      <b>$ 100</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name="sort_by"
                    className=" form-control form-select"
                    id="SortBy"
                    aria-describedby="a11y-refresh-page-message"
                  >
                    <option defaultValue="best-selling">Best selling</option>
                    <option value="manual">Featured</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="tottalproducts mb-0">21 products</p>
                  <div className="d-flex align-items-center gap-10 grid">
                    <img
                      onClick={() => setGrid(3)}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt=""
                    />

                    <img
                      onClick={() => setGrid(4)}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt=""
                    />
                    <img
                      onClick={() => setGrid(6)}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt=""
                    />
                    <img
                      onClick={() => setGrid(12)}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row products-list pb-5">
              {productState.map((product) => (
                <ProductCard key={product._id} product={product} grid={grid} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;

import React from "react";
import Meta from "../components/Meta";
import BrandCrumb from "../components/BrandCrumb";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <Meta title="Checkout - Digitic" />
      <BrandCrumb title="Checkout" />
      <section className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Digitic</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      cart
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">demo@gmail.com</p>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div class="form-floating w-100">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>Use a new address</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Saved addresses</label>
                  </div>
                  <div class="form-floating w-100">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>United States</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Country/Region</label>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Apartment etc"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control h-100"
                    />
                  </div>
                  <div class="form-floating flex-grow-1">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>Indiana</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">State</label>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zip"
                      className="form-control h-100"
                    />
                  </div>
                  <div className="w-100 mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2" /> Return to Cart
                      </Link>
                      <Link to="/cart" className="button text-capitalize">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;

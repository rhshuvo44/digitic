import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import BrandCrumb from "../components/BrandCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Checkout = () => {
  return (
    <>
      <Meta title="Checkout - Digitic" />
      <BrandCrumb title="Checkout" />
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
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
                    <Link to="/cart" className="text-dark">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item text-dark">Information</li>
                  &nbsp; /
                  <li className="breadcrumb-item text-dark">Shipping</li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item text-dark active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h2 className="title">Contact Information</h2>
              <p className="user-details">demo@gmail.com</p>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="form-floating w-100">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Use a new address</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelect">Saved addresses</label>
                </div>
                <div className="form-floating w-100">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>United States</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelect">Country/Region</label>
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="First Name" />
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="Last Name" />
                </div>
                <div className="w-100">
                  <CustomInput type="text" placeholder="Address" />
                </div>
                <div className="w-100">
                  <CustomInput type="text" placeholder="Apartment etc" />
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    placeholder="City"
                    classname="h-100"
                  />
                </div>
                <div className="form-floating flex-grow-1">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Indiana</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelect">State</label>
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    placeholder="Zip"
                    classname=" h-100"
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
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center">
                <div className="w-75 d-flex gap-15">
                  <div className="w-50 position-relative">
                    <span
                      style={{ top: "-15px", right: "5px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img
                      src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                      className="img-fulid w-100"
                    />
                  </div>
                  <div>
                    <h5 className="title">
                      Kids Headphones Bulk 10 Pack Multi Colored For Students
                    </h5>
                    <p>S / red</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fw-bold">$100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <h4>SubTotal</h4>
                <h5 className="fw-bold">$10000</h5>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Shipping</h4>
                <h5 className="mb-0 fw-bold">$100</h5>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <h4 className="fs-5 text-dark fw-bold">Total</h4>
              <h5>
                USD
                <span className="fs-5 text-dark fw-bold"> $10000</span>
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;

import React from "react";
import { AiFillDelete } from "react-icons/ai";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title="Cart - Digitic" />
      <BrandCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quentity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-4 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center gap-15">
                <div className="w-25">
                  <img
                    src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    className="img-fulid w-100"
                    alt=""
                  />
                </div>
                <div className="w-75">
                  <p>Kids Headphones Bulk 10 Pack Multi Colored For Students</p>
                  <p>Color : red</p>
                  <p>Size : M</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <input
                  type="number"
                  name=""
                  min={1}
                  max={10}
                  className="form-control"
                  style={{ width: "70px" }}
                  id=""
                  placeholder="Qn"
                />
                <AiFillDelete className="fs-5" />
              </div>
              <div className="cart-col-4">
                <h5 className="total">$100</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between">
              <div>
                <Link to="/store" className="button text-capitalize">
                  Continue To Shopping
                </Link>
                <p className="mt-5 cart-note">Order special instructions</p>
                <textarea
                  name=""
                  id=""
                  cols="40"
                  rows="5"
                  className="form-control"
                ></textarea>
              </div>
              <div className="mt-5 d-flex flex-column align-items-end">
                <h4 className="subtotal">SubTotal: $100</h4>
                <p className="tax">Taxes and shipping calculated at checkout</p>
                <Link
                  to="/checkout"
                  className="button w-100 text-center text-capitalize"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;

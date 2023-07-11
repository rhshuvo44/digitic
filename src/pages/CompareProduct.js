import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";
import Colors from "../components/Colors";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare - Digitic" />
      <BrandCrumb title="Compare" />;
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
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
                <h6 className="price mb-3">$100</h6>
              </div>
              <div className="product-details">
                <h5>Brand:</h5>
                <p>Havels</p>
              </div>
              <div className="product-details">
                <h5>Type:</h5>
                <p>Watch Accessories</p>
              </div>
              <div className="product-details">
                <h5>SKU:</h5>
                <p>SKU026</p>
              </div>
              <div className="product-details">
                <h5>Availbility:</h5>
                <p>In Stock</p>
              </div>
              <div className="product-details">
                <h5>Color:</h5>
                <Colors />
              </div>
              <div className="product-details">
                <h5>Size:</h5>
                <div className="d-flex gap-10">
                  <p>S</p>
                  <p>M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;

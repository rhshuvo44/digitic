import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { services } from "../utils/Data";
const Home = () => {
  return (
    <>
      <Meta title="Home - Digitic" />
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <div className="main-banner-content position-absolute">
                <h4 className="text-uppercase">Supercharged for pros.</h4>
                <h5>ipad s13+ pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative p-3">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4 className="text-uppercase">Supercharged for pros.</h4>
                  <h5>ipad s13+ pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative  p-3">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute ">
                  <h4 className="text-uppercase">Supercharged for pros.</h4>
                  <h5>ipad s13+ pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative  p-3">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4 className="text-uppercase">Supercharged for pros.</h4>
                  <h5>ipad s13+ pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative p-3">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4 className="text-uppercase">Supercharged for pros.</h4>
                  <h5>ipad s13+ pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="service d-flex align-items-center justify-content-between">
              {services.map((service, index) => (
                <div key={index} className="d-flex align-items-center gap-15">
                  <img src={service.image} alt="" />
                  <div>
                    <h6>{service.title}</h6>
                    <p className="mb-0">{service.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center card-wrapper">
              <div className="d-flex  align-items-center">
                <div>
                  <h6>cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="section-heading">Featured Collection</h2>
          </div>
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </Container>

      <Container class1="famous-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-01.jpg" className="img-fluid" alt="" />
              <div className="famous-card-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $999 or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-02.jpg" className="img-fluid" alt="" />
              <div className="famous-card-content position-absolute">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch Series 7</h6>
                <p className="text-dark">From $999 or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-03.jpg" className="img-fluid" alt="" />
              <div className="famous-card-content position-absolute">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch Series 7</h6>
                <p className="text-dark">From $999 or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-04.jpg" className="img-fluid" alt="" />
              <div className="famous-card-content position-absolute">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch Series 7</h6>
                <p className="text-dark">From $999 or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="section-heading">Special Products</h2>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1="popular-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="section-heading">Our Popular Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="card"></div>
            <div className="card"></div>
          </div>
          <div className="col-8">
            <div className="row">
              {/* <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> */}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="marquee home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="section-heading">Our Latest News</h2>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </>
  );
};

export default Home;

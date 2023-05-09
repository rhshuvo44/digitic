import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrraper-1 py-5">
        <div className="container-xxl">
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
        </div>
      </section>
      <section className="py-5">
        
      </section>
    </>
  );
};

export default Home;

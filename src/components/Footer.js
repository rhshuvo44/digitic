import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="search"
                  class="form-control py-1"
                  placeholder="Enter Your Email"
                  aria-label="Enter Your Email"
                  aria-describedby="newsletter"
                />
                <span class="input-group-text p-2" id="newsletter">
                  Subscript
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact us</h4>
              <div>
                <address className="text-white">
                  Hno : 277 Near Vill chopal, <br />
                  Sonipat
                  <br /> PinCode : 131214
                </address>
                <a
                  href="tel:+880123456987"
                  className="mt-4 d-block mb-1 text-white"
                >
                  +880123456987
                </a>
                <a
                  href="mailto:demo@demo.com"
                  className=" d-block mb-4 text-white"
                >
                  demo@demo.com
                </a>
                <div className="social-icons d-flex align-items-center gap-15">
                  <a
                    href="http://ddddd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="http://ddddd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsYoutube />
                  </a>
                  <a
                    href="http://ddddd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="http://ddddd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    href="http://ddddd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className=" py-1 mb-1" to="/laptop">
                  Privacy policy
                </Link>
                <Link className=" py-1 mb-1" to="/laptop">
                  Refund policy
                </Link>
                <Link className=" py-1 mb-1" to="/laptop">
                  Shipping policy
                </Link>
                <Link className=" py-1 mb-1" to="/laptop">
                  Terms of service
                </Link>
                <Link className=" py-1 mb-1" to="/laptop">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className=" py-1 mb-1" to="/laptop">
                  Search
                </Link>
                <Link className=" py-1 mb-1" to="/laptop">
                  About us
                </Link>
                <Link className=" py-1 mb-1" to="/laptop">
                  Faq
                </Link>
                <Link className=" py-1 mb-1" to="/laptop">
                  Contact
                </Link>
                <Link className=" py-1 mb-1" to="/laptop">
                  Size chart
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className=" py-1 mb-1" to="/laptop">
                  Accessories
                </Link>
                <Link className=" py-1 mb-1" to="/laptop">
                  Laptops
                </Link>
                <Link className=" py-1 mb-1" to="/laptop">
                  headphones
                </Link>
                <Link className=" py-1 mb-1" to="/laptop">
                  smart watches
                </Link>
                <Link className="py-1 mb-1" to="/laptop">
                  tablets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} , Powered by Digitic
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

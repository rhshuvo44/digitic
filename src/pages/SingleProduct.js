import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import ReactImageZoom from "react-image-zoom";
import StarRatings from "react-star-ratings";
import BrandCrumb from "../components/BrandCrumb";
import Colors from "../components/Colors";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const [orderProduct, setOrderProduct] = useState(true);
  const [reting, setReting] = useState(0);
  // image magnify
  const props = {
    width: 610,
    height: 500,
    zoomWidth: 610,
    img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    // zoomPosition: "original",
  };

  // text copy funcion
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BrandCrumb title="Product Name" />

      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <ReactImageZoom {...props} />
            </div>
            <div className="other-product-image d-flex flex-wrap gap-15">
              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3>
                  Smart Watch With Advanced Health Monitoring, Fitness Tracking
                </h3>
              </div>
              <div className="border-bottom">
                <p className="price">$100</p>
                <div className="d-flex align-items-center gap-10">
                  <div style={{ marginBottom: "0.5rem" }}>
                    <StarRatings
                      rating={4}
                      starRatedColor="#ffd700"
                      numberOfStars={5}
                      name="rating"
                      starSpacing="2px"
                      starDimension="15px"
                    />
                  </div>
                  <p className="mb-0"> (2 Reviews)</p>
                </div>
                <a href="#review" className="my-3">
                  Write a Review
                </a>
              </div>
              <div className="py-3 ">
                <div className="d-flex gap-10 align-items-center">
                  <h4>Type:</h4> <p>Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h4>Brand:</h4>
                  <p>Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h4>Categories:</h4> <p>acnbvnnvh</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h4>Tags:</h4>
                  <p>watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h4>SKU:</h4>
                  <p>SKu027</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h4>Availlability:</h4>
                  <p className="">in Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column">
                  <h4>Size:</h4>
                  <div className="d-flex flex-wrap gap-15 mb-2">
                    <span className="badge border bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column">
                  <h4>Color:</h4>
                  <Colors />
                </div>
                <div className="d-flex gap-5 align-items-center my-2">
                  <h4 className="mb-0">Quentity:</h4>

                  <input
                    type="number"
                    name=""
                    className="form-control"
                    min={1}
                    max={10}
                    style={{ width: "70px" }}
                    id=""
                    placeholder="Qn"
                  />
                  <button className="button border-0 ">Add To Cart</button>
                  <button className="button border-0 buy-btn">
                    buy it now
                  </button>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <a href="">
                    <AiOutlineHeart className="fs-5 me-2" />
                    Add to wishlist
                  </a>
                  <a href="">
                    <TbGitCompare className="fs-5 me-2" />
                    Add to comnpare
                  </a>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h4>Shipping & Returns</h4>
                  <p>
                    Free shipping and returns available on all orders! <br />
                    We ship all US domestic orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h4>Product Link</h4>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      copyToClipboard(
                        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      );
                    }}
                  >
                    Copy Product Link
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="p-3">
              <h4>Description</h4>
              <p className="bg-white p-4 rounded mt-3">
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat."
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="review-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <StarRatings
                      rating={4}
                      starRatedColor="#ffd700"
                      numberOfStars={5}
                      name="rating"
                      starSpacing="2px"
                      starDimension="15px"
                    />
                    <p className="mb-0">Base on 2 Reviews</p>
                  </div>
                </div>
                {orderProduct && (
                  <div>
                    <a
                      className="text-dark text-decoration-underline"
                      href="#review"
                    >
                      Write a review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form" id="review">
                <h4 className="my-2">Write a review</h4>
                <form className="mt-4">
                  <div className="d-flex flex-column gap-10 mb-3">
                    <p className="mb-0">Ratting</p>

                    <StarRatings
                      rating={reting}
                      changeRating={setReting}
                      starRatedColor="#ffd700"
                      numberOfStars={5}
                      name="rating"
                      starSpacing="2px"
                      starDimension="15px"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput2"
                      className="form-label"
                    >
                      Body of Review (1500)
                    </label>
                    <textarea
                      rows="5"
                      className="form-control bg-light"
                      id="formGroupExampleInput2"
                      placeholder="Write your comments here"
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0 text-capitalize">
                      Submit review
                    </button>
                  </div>
                </form>
              </div>
              <div className="reviews">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">test</h6>
                    <StarRatings
                      rating={4}
                      starRatedColor="#ffd700"
                      numberOfStars={5}
                      name="rating"
                      starSpacing="2px"
                      starDimension="15px"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas eum eaque id laboriosam perspiciatis cumque dolorem
                    alias temporibus suscipit obcaecati?Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Minus earum itaque
                    nesciunt corporis blanditiis vero dolor quas qui, facilis
                    eos. Nesciunt maxime id explicabo aliquid! Dignissimos
                    repudiandae suscipit cum esse, possimus sed dicta mollitia?
                    Tenetur, quod deserunt cupiditate rerum molestias numquam
                    reprehenderit suscipit! Cumque nulla sunt rem! Deleniti,
                    neque illum!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h2 className="section-heading">You May Also Like</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;

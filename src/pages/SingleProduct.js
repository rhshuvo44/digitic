import React, { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import StarRatings from "react-star-ratings";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 610,
    img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  };

  const [orderProduct, setOrderProduct] = useState(true);
  const [reting, setReting] = useState(0);
  return (
    <>
      <Meta title={"Product Name"} />
      <BrandCrumb title="Product Name" />
      <section className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-image">
                
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="p-3">
                <h4>Description</h4>
                <p className="bg-white p-4 rounded mt-3">
                  "At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident, similique sunt in culpa qui officia
                  deserunt mollitia animi, id est laborum et dolorum fuga. Et
                  harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="review-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
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
                        href="eee"
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form">
                  <h4 className="mb-2">Write a review</h4>
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
                    <div class="mb-3">
                      <label for="formGroupExampleInput2" class="form-label">
                        Body of Review (1500)
                      </label>
                      <textarea
                        rows="5"
                        class="form-control bg-light"
                        id="formGroupExampleInput2"
                        placeholder="Write your comments here"
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <input
                        type="submit"
                        value="Submit review"
                        className=" button border-0 text-capitalize"
                      />
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
                      repudiandae suscipit cum esse, possimus sed dicta
                      mollitia? Tenetur, quod deserunt cupiditate rerum
                      molestias numquam reprehenderit suscipit! Cumque nulla
                      sunt rem! Deleniti, neque illum!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
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
        </div>
      </section>
    </>
  );
};

export default SingleProduct;

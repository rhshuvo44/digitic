import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import ReactImageZoom from "react-image-zoom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import BrandCrumb from "../components/BrandCrumb";
import Colors from "../components/Colors";
import Container from "../components/Container";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import {
  addToWishlist,
  getAllProducts,
  getaProduct,
} from "../features/products/productSlice";
import { addProdToCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [orderProduct, setOrderProduct] = useState(true);
  const [reting, setReting] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("red");

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

  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getaProduct(getProductId));
    dispatch(getAllProducts());
  }, [dispatch, getProductId]);
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  const productState = useSelector((state) => state?.products?.singleProduct);

  const allProductState = useSelector((state) => state?.products?.products);

  // image magnify
  const props = {
    width: 610,
    height: 500,
    zoomWidth: 610,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1508&q=80",
    zoomPosition: "original",
  };
  const uploadCart = () => {
    dispatch(
      addProdToCart({
        productId: productState?._id,
        price: productState?.price,
        color,
        quantity,
      })
    );
  };
  return (
    <>
      <Meta title={productState?.title} />
      <BrandCrumb title={productState?.title} />

      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <ReactImageZoom {...props} />
            </div>
            <div className="other-product-image d-flex flex-wrap gap-15">
              {productState?.images?.map((image) => (
                <div key={image.url}>
                  <img src={image.url} className="img-fluid" alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3>{productState?.title}</h3>
              </div>
              <div className="border-bottom">
                <p className="price">${productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <div style={{ marginBottom: "0.5rem" }}>
                    <StarRatings
                      rating={productState?.totalrating}
                      starRatedColor="#ffd700"
                      numberOfStars={5}
                      name="rating"
                      starSpacing="2px"
                      starDimension="15px"
                    />
                  </div>
                  <p className="mb-0"> ({productState?.totalrating} Reviews)</p>
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
                  <p>{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h4>Categories:</h4> <p>{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h4>Tags:</h4>
                  <p>{productState?.tags}</p>
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
                  <Colors setColor={setColor} colorData={productState?.color} />
                </div>
                <div className="d-flex gap-5 align-items-center my-2">
                  <h4 className="mb-0">Quentity:</h4>

                  <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    min={1}
                    max={10}
                    style={{ width: "70px" }}
                    id="quantity"
                    placeholder="Qn"
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                  />
                  <button
                    className="button border-0 "
                    onClick={() => uploadCart()}
                  >
                    Add To Cart
                  </button>
                  <button className="button border-0 buy-btn">
                    buy it now
                  </button>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <Link onClick={() => addToWish(productState?._id)}>
                    <AiOutlineHeart className="fs-5 me-2" />
                    Add to wishlist
                  </Link>
                  <Link>
                    <TbGitCompare className="fs-5 me-2" />
                    Add to comnpare
                  </Link>
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
                      copyToClipboard(window.location.href);
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
              <p
                className="bg-white p-4 rounded mt-3"
                dangerouslySetInnerHTML={{
                  __html: productState?.description,
                }}
              ></p>
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
                      rating={productState?.totalrating}
                      starRatedColor="#ffd700"
                      numberOfStars={5}
                      name="rating"
                      starSpacing="2px"
                      starDimension="15px"
                    />
                    <p className="mb-0">
                      Base on {productState?.totalrating} Reviews
                    </p>
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
              {allProductState &&
                allProductState?.map((product) => {
                  if (product.tags === "popular") {
                    return <ProductCard key={product._id} product={product} />;
                  }
                })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;

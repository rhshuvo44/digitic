import React, { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import BrandCrumb from "../components/BrandCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { getABlog } from "../features/blog/blogSlice";

const SingleBlog = () => {
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getABlog(getBlogId));
  }, [dispatch, getBlogId]);
  const blogState = useSelector((state) => state?.blogs?.singleBlog);

  return (
    <>
      <Meta title={blogState?.title} />
      <BrandCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div className="mt-4">
                <ul>
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="single-blog-card">
              <Link to="/blog">
                <BsArrowLeft className="fs-4" /> Go back to blog
              </Link>
              <h3 className="title">{blogState?.title}</h3>
              <img
                src={blogState?.images[0]?.url}
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: blogState?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;

import React, { useEffect } from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blog/blogSlice";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state?.blogs?.singleBlog);
  const { description, images, title } = blogState;
  useEffect(() => {
    dispatch(getABlog(id));
  }, [dispatch, id]);

  return (
    <>
      <Meta title={title} />
      <BrandCrumb title={title} />
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
              <h3 className="title">{title}</h3>
              <img
                src={images[0]?.url}
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: description,
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

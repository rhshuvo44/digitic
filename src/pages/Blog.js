import React, { useEffect } from "react";
import BlogCard from "../components/BlogCard";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blog/blogSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state?.blogs?.blogs);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  return (
    <>
      <Meta title="News - Digitic" />
      <BrandCrumb title="News" />
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
            <div className="row blogs-list pb-5">
              {blogState?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;

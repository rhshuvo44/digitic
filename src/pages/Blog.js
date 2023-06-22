import React from "react";
import BlogCard from "../components/BlogCard";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const Blog = () => {
  return (
    <>
      <Meta title="News - Digitic" />
      <BrandCrumb title="News" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
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
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

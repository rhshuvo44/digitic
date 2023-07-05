import React from "react";
import { Link, useLocation } from "react-router-dom";

const BlogCard = () => {
  let location = useLocation();

  return (
    <div className={`${location?.pathname === "/blog" ? `col-6` : "col-3"}`}>
      <div className="blog-card mb-3">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content pb-4">
          <p className="date">1 Dec, 2022</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            You’re only as good as your last collection, which is an enormous
            pressure. I think there is something about luxury...
          </p>
          <Link to="/blog/:id" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";
const BlogCard = ({ blog }) => {
  console.log(blog);
  const { createdAt, description, images, title, _id } = blog;
  let location = useLocation();

  return (
    <div className={`${location?.pathname === "/blog" ? `col-6` : "col-3"}`}>
      <div className="blog-card mb-3">
        <div className="card-image">
          <img src={images[0]?.url} className="img-fluid" alt={title} />
        </div>
        <div className="blog-content pb-4">
          <p className="date">
            {moment(createdAt).format("MMMM Do YYYY, h:mm a")}
          </p>
          <h5 className="title">{title}</h5>
          <p
            className="desc"
            dangerouslySetInnerHTML={{
              __html: description.substr(0, 200) + "...",
            }}
          ></p>
          <Link to={`/blog/${_id}`} className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

import React from "react";
import { Link } from "react-router-dom";

const BrandCrumb = ({ title }) => {
  return (
    <div className="brandcrumb py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">
              <Link to="/" className="text-dark">
                Home
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCrumb;

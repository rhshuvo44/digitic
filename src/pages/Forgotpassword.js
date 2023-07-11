import React from "react";
import Meta from "../components/Meta";
import BrandCrumb from "../components/BrandCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <>
      <Meta title="Forgot Password - Digitic" />
      <BrandCrumb title="Forgot Password" />
      <Container class1="forgot-password-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Reset Your Password</h3>
              <p className="text-center">
                We will send you an email to reset your password
              </p>
              <form action="">
                <div class="form-floating my-4">
                  <CustomInput
                    type="email"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email</label>
                </div>

                <div className="d-flex flex-column gap-15 justify-content-center align-items-center mt-3">
                  <button className="button border-0 text-capitalize">
                    submit
                  </button>
                  <Link to="/login" className="cancel text-capitalize">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;

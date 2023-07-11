import React from "react";
import { Link } from "react-router-dom";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Login = () => {
  return (
    <>
      <Meta title="Login - Digitic" />
      <BrandCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form action="">
                <div class="form-floating my-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div>
                  <Link to="/forgot-password" className="forgote-link">
                    Forgot Password?
                  </Link>
                  <div className="d-flex gap-15 justify-content-center align-items-center mt-3">
                    <button className="button border-0 text-capitalize">
                      Login
                    </button>
                    <Link
                      to="/signup"
                      className="button signup text-capitalize"
                    >
                      Signup
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;

import React from "react";
import Meta from "../components/Meta";
import BrandCrumb from "../components/BrandCrumb";
import Container from "../components/Container";

const Signup = () => {
  return (
    <>
      <Meta title="Create Account- Digitic" />
      <BrandCrumb title="Create Account" />;
      <Container class1="create-wrapper py-5 home-wrapper-2">
      <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Create Account</h3>
              <form action="">
                <div class="form-floating my-4">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="first name"
                  />
                  <label for="floatingInput">Firts Name</label>
                </div>
                <div class="form-floating mb-4">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="last name"
                  />
                  <label for="floatingInput">Last Name</label>
                </div>
                <div class="form-floating mb-4">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mb-4">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button className="button border-0 text-capitalize">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      
    </>
  );
};

export default Signup;

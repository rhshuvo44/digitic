import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

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
                <div className="form-floating my-4">
                  <CustomInput
                    type="text"
                    id="floatingInput"
                    placeholder="first name"
                  />

                  <label htmlFor="floatingInput">Firts Name</label>
                </div>
                <div className="form-floating mb-4">
                  <CustomInput
                    type="text"
                    id="floatingInput"
                    placeholder="last name"
                  />

                  <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating mb-4">
                  <CustomInput
                    type="email"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-4">
                  <CustomInput
                    type="password"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button className="button border-0 text-capitalize">
                    Create
                  </button>
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

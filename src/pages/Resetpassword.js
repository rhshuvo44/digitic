import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const Resetpassword = () => {
  return (
    <>
      <Meta title="Reset Password - Digitic" />
      <BrandCrumb title="Reset Password" />
      <div className="py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Reset Password</h3>
                <form action="">
                  <div class="form-floating my-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingInput"
                      placeholder="password"
                    />
                    <label for="floatingInput">Password</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Confrim Password"
                    />
                    <label for="floatingPassword">Confrim Password</label>
                  </div>

                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <button className="button border-0 text-capitalize">
                      reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;

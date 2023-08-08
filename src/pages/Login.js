import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import BrandCrumb from "../components/BrandCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("'Invalid email address'")
    .required("Email is Required"),
  password: yup.string().required("password Number is Required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
      setTimeout(() => {
        navigate("/login");
      }, 6000);
    },
  });
  return (
    <>
      <Meta title="Login - Digitic" />
      <BrandCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form action="" onSubmit={formik.handleSubmit}>
                <div className="form-floating my-3">
                  <CustomInput
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    value={formik.values.email}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-danger">{formik.errors.email}</p>
                ) : null}
                <div className="form-floating mb-3">
                  <CustomInput
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    value={formik.values.password}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-danger">{formik.errors.password}</p>
                ) : null}

                <div>
                  <Link to="/forgot-password" className="forgote-link">
                    Forgot Password?
                  </Link>
                  <div className="d-flex gap-15 justify-content-center align-items-center mt-3">
                    <button
                      type="submit"
                      className="button border-0 text-capitalize"
                    >
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

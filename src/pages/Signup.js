import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import BrandCrumb from "../components/BrandCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import { registerUser } from "../features/user/userSlice";
const SignupSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("'Invalid email address'")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile Number is Required"),
  password: yup.string().required("password is Required"),
});
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      setTimeout(() => {
        navigate("/login");
      }, 6000);
    },
  });
  return (
    <>
      <Meta title="Create Account- Digitic" />
      <BrandCrumb title="Create Account" />;
      <Container class1="create-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Create Account</h3>
              <form action="" onSubmit={formik.handleSubmit}>
                <div className="form-floating my-4">
                  <CustomInput
                    type="text"
                    id="firstname"
                    placeholder="first name"
                    name="firstname"
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                    value={formik.values.firstname}
                  />

                  <label htmlFor="firstname">Firts Name</label>
                </div>
                {formik.touched.firstname && formik.errors.firstname ? (
                  <p className="text-danger">{formik.errors.firstname}</p>
                ) : null}
                <div className="form-floating mb-4">
                  <CustomInput
                    type="text"
                    id="lastname"
                    placeholder="last name"
                    name="lastname"
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                    value={formik.values.lastname}
                  />

                  <label htmlFor="lastname">Last Name</label>
                </div>
                {formik.touched.lastname && formik.errors.lastname ? (
                  <p className="text-danger">{formik.errors.lastname}</p>
                ) : null}
                <div className="form-floating mb-4">
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
                <div className="form-floating mb-4">
                  <CustomInput
                    type="tel"
                    id="mobile"
                    placeholder="+12345678"
                    name="mobile"
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                    value={formik.values.mobile}
                  />
                  <label htmlFor="mobile">Mobile</label>
                </div>
                {formik.touched.mobile && formik.errors.mobile ? (
                  <p className="text-danger">{formik.errors.mobile}</p>
                ) : null}
                <div className="form-floating mb-4">
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
                <div className="d-flex justify-content-center mt-4">
                  <button
                    type="submit"
                    className="button border-0 text-capitalize"
                  >
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

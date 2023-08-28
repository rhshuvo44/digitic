import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrandCrumb from "../components/BrandCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { getUserWish } from "../features/user/userSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state?.auth?.user);
  console.log(userState);
  useEffect(() => {
    dispatch(getUserWish());
  }, [dispatch]);

  return (
    <>
      <Meta title="Wishlist - Digitic" />
      <BrandCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt=""
              />
              <div className="wishlist-card-image">
                <img src="images/watch.jpg" alt="img-fluid w-100" />
              </div>
              <h5 className="title">
                Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera
              </h5>
              <h6 className="price mb-3">$ 100</h6>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;

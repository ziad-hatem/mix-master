import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigation } from "react-router-dom";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      <section className="page flex justify-center items-center">
        {isPageLoading ? (
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
};

export default HomeLayout;

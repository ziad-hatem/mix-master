import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <Wrapper className="flex flex-col text-center md:flex-row">
      <NavLink to="/" className="logo text-3xl p-5 text-green-800 font-bold">
        MixMaster
      </NavLink>
      <div className="links flex flex-col justify-end md:flex-row  md:gap-8 font-bold ">
        <NavLink to="/" className="nav-link hover:text-green-800 ">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link hover:text-green-800">
          About
        </NavLink>
        <NavLink to="/newsletter" className="nav-link hover:text-green-800">
          Newsletter
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export default Navbar;

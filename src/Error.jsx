import React from "react";
import img from "./assets/not-found.svg";
import { styled } from "styled-components";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt="Error 404" />
        <h3>Ohh!</h3>
        <p>We can't find the page you look for</p>
        <Link
          to="/"
          className="bg-red-200 w-28 p-1 transition duration-150 hover:bg-gray-400 text-center mt-5"
        >
          Bact Home
        </Link>
      </Wrapper>
    );
  }
  return <section>Sorry We Have Some Error</section>;
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Error;

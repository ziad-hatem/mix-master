import React from "react";
import { styled } from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <h3 className="text-4xl font-bold text-center mb-5">About Us</h3>
      <p className="text-gray-600 text-center md:max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas
        quo quas necessitatibus explicabo tempora libero consequatur. Dolores
        eligendi fugit reprehenderit distinctio libero, quidem dignissimos! Nisi
        corrupti minima sit eaque eum harum facere ad. Accusantium dolore
        voluptate provident voluptates quam assumenda, quae nesciunt facere quod
        vero ut molestiae incidunt porro.
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-top: 50px;
  p {
    letter-spacing: 1px;
    line-height: 30px;
  }
`;
export default About;

import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import sorry from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={sorry} alt="Sorry Page" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;

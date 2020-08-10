import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container"></div>
      <div className="homepage">
        <div className="intro">
          <div className="whiteStripe"></div>
          <h1 className="firstPageDivs">Pierce Butler</h1>

          <div className="whiteStripe"></div>
          <h1 className="firstPageDivs">Software Engineer</h1>

          <div className="whiteStripe"></div>
          <h1 className="firstPageDivs">Front-end Enthusiast</h1>
        </div>
      </div>
    </>
  );
}

export default Home;

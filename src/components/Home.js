import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function Home() {
  return (
    <div className = "homepage">
      <div className="intro">
        <h1 className = "firstPageDivs">Pierce Butler</h1>
        <h1 className = "firstPageDivs">Software Engineer</h1>
        <h1 className = "firstPageDivs">Front-end Enthusiast</h1>
      </div>
      <div className="links">
        <Link to = "/aboutme" className = "firstPageDivs">About Me</Link>
        <Link to = "/portfolio" className = "firstPageDivs">Portfolio</Link>
        <Link to = "/contact" className = "firstPageDivs">Contact me</Link>
      </div>
    </div>
  );
}

export default Home;

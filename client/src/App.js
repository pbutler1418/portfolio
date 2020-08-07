import React from 'react';
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import './App.css';
import {TransitionGroup, CSSTransition} from "react-transition-group"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Slider from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="links">
        <nav>
          <NavLink
            exact
            to={'/'}
              activeClassName={"active"}
              className = "navigation"
              
          >
            Home
            </NavLink>
          <NavLink
            exact
            to={'/aboutme'}
              activeClassName={"active"}
              className = "navigation"
          >
            About Me
          </NavLink>
          <NavLink
            exact
            to={'/portfolio'}
              activeClassName={"active"}
              className = "navigation"
          >
            Portfolio
          </NavLink>
          <NavLink
            exact
            to={'/contact'}
              activeClassName={"active"}
              className = "navigation"
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
        </main>
        </Router>
    </div>
  )
}
// function App() {
  
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route exact path={"/"} component={Home} />
//             <Route exact path={"/aboutme"} component={AboutMe} />
//             <Route exact path={"/portfolio"} component={Portfolio} />
//           <Route exact path={"/contact"} component={Contact} />
//         </Switch>
//         <div className="links">
//           <Link to="/aboutme" className="firstPageDivs">
//             About Me
//           </Link>
//           <Link to="/portfolio" className="firstPageDivs">
//             Portfolio
//           </Link>
//           <Link to="/contact" className="firstPageDivs">
//             Contact me
//           </Link>
//         </div>
//       </Router>
      
//     </div>
//   );
// }

export default App;

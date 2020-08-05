import React from 'react';
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Slider from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
            <Route exact path={"/aboutme"} component={AboutMe} />
            <Route exact path={"/portfolio"} component={Portfolio} />
            <Route exact path={"/contact"} component={Contact} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;

import React from "react";
import { render } from "react-dom";
import Home from "./Home";
import NavBar from './NavBar';
import Approach from './Approach';
import Section from './DefaultSection';
require("./styles.css");

const App = () => (
  <div>
    <div className="landImage">
      <img src="http://via.placeholder.com/1440x748" />
    </div>
    <NavBar />
    <Home />
    <Approach />
    <Section />
  </div>
);

render(<App />, document.getElementById("root"));

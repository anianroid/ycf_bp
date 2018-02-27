import React from "react";
import { render } from "react-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Approach from "./Approach";
import Section from "./DefaultSection";
import OurWork from "./OurWork.js";
require("./styles.css");

const App = () => (
  <div>
    <div className="landImage">
      <img src="http://via.placeholder.com/1440x648" />
    </div>
    <NavBar />
    <Home />
    <Approach />
    <Section />
    <OurWork />
  </div>
);

render(<App />, document.getElementById("root"));

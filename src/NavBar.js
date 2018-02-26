import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav">
          <div>
            <a>Who are we?</a>
          </div>
          <div>
            <a>Our Work</a>
          </div>
          <div>
            <img src="http://via.placeholder.com/140x140" />
          </div>
          <div>
            <a>Get Involved</a>
          </div>
          <div>
            <a>Support</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;

import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div>
          <div>
            <img src="http://via.placeholder.com/100x150" />
          </div>
          <p>A Small tagline about the company should come here.</p>
        </div>
        <div>
          <h3>WHERE WE WORK FROM</h3>
          <p>
            Workbench Projects, under Halasuru Metro Station, Bangalore
            Karnataka
          </p>
        </div>
        <div>
          <h3>JOIN IN THE CONVERSATION ON OUR CHANNELS</h3>
          <div>
            <i className="fab fa-vimeo-square" />
            <i class="fab fa-vimeo-square" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

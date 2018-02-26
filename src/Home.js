import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div>
          <div className="img-circle">
            <img src="http://via.placeholder.com/240x240" />
          </div>
        </div>
        <div>
          <h1>An introduction to what YCF is.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tempor, dolor vel auctor vulputate, justo risus pretium nisi, ac
            sollicitudin augue felis quis tellus. Etiam eu consequat urna. Fusce
            auctor est a tellus tincidunt lobortis. Aliquam semper, ipsum at
            egestas eleifend, nunc augue convallis justo, ut euismod mauris ex
            id augue.
          </p>
        </div>
        <div />
      </div>
    );
  }
}

export default Home;

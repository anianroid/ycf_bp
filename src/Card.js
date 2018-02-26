import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div
          className={
            this.props.type === "1"
              ? "card-content push-right"
              : "card-content push-left"
          }
        >
          <h2>{this.props.title}</h2>
          <p>{this.props.content}</p>
        </div>
        <div className="card-bg" />
      </div>
    );
  }
}

export default Card;

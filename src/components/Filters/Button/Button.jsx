import React from "react";

class Button extends React.Component {
  render() {
    
    return (
      <button
        className={`${this.props.className}`}
        onClick={() => this.props.handleClick(this.props.text)}
      >
        {this.props.text} <i className={this.props.orderType ? "far fa-arrow-alt-circle-down" : "far fa-arrow-alt-circle-up" } />
      </button>
    );
  }
}

export default Button;

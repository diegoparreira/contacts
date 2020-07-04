import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className={`${this.props.className}`}
        onClick={() => this.props.handleClick(this.props.text)}
      >
        {this.props.text} <i className={this.props.orderType ? this.props.type[0] : this.props.type[1] } />
      </button>
    );
  }
}

export default Button;

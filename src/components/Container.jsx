import React from "react";

class Container extends React.Component {
  render() {
    return <div className="container" data-testid={this.props.dataTestId}>{this.props.children}</div>;
  }
}

export default Container;

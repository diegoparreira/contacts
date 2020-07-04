import React from "react";
import Button from "./Button";
import Search from "./Search";
import Container from "./Container";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [
        { text: "Name", type: ["far fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-up" ]  },
        { text: "Country", type: ["far fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-up" ] },
        { text: "Company", type: ["far fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-up" ] },
        { text: "Department", type: ["far fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-up" ] },
        { text: "Admission Date", type: ["far fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-up" ] },
      ],
    };
  };

  render() {
    return (
      <Container dataTestId="filters">
        <section className="filters">
          <Search 
            handleChange={this.props.handleChange}
          />

          {this.state.labels.map((e) => (
            <Button
              key={e.text}
              handleClick={this.props.handleClick}
              className={`filters__item ${this.props.selected === e.text ? "is-selected" : ""}`} 
              type={e.type}
              text={e.text}
              orderType={this.props.orderType}
            />
          ))}
        </section>
      </Container>
    );
  }
}

export default Filters;

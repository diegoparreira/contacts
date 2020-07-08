import React from "react";
import Contact from "./Contact";
import Container from "../Container";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: {
        avatar: "avatar",
        name: "Name",
        phone: "Phone",
        country: "Country",
        admissionDate: "Admission Date",
        company: "Company",
        department: "Department",
      },
    };
  }

  render() {
    return (
      <Container dataTestId="contacts">
        <section className="contacts">
          <Contact data={this.state.labels} />
          {this.props.data &&
            this.props.data.map((e) => <Contact key={e.id} data={e} />)}
        </section>
      </Container>
    );
  }
}

export default Contacts;

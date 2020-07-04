import React from "react";
import {formatDate} from "../utils/formatDate";

class Contact extends React.Component {

  render() {
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          {this.props.data.avatar && (
            <img
              src={this.props.data.avatar}
              alt={`${this.props.data.name} Avatar`}
            />
          )}
        </span>
        <span className="contact__data">{this.props.data.name}</span>
        <span className="contact__data">{this.props.data.phone}</span>
        <span className="contact__data">{this.props.data.country}</span>
        <span className="contact__data">{this.props.data.admissionDate !== "Admission Date" ? formatDate(this.props.data.admissionDate) : "Admission Date" }</span>
        <span className="contact__data">{this.props.data.company}</span>
        <span className="contact__data">{this.props.data.department}</span>
      </article>
    );
  }
}

export default Contact;

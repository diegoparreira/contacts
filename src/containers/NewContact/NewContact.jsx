import React from "react";
import { Link } from "react-router-dom";
import "./NewContact.scss";

const labels = [
  "Name",
  "Avatar",
  "Company",
  "Department",
  "Admission Date",
  "Phone",
  "Country",
];

const noAvatarImage = "https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png";

const Input = (props) => {
  return (
    <div class="form__group field">
      <input
        type="input"
        class="form__field"
        placeholder={props.text}
        name={props.text}
        id={props.text}
        required
      />
      <label for={props.text} class="form__label">
        {props.text}
      </label>
    </div>
  );
};

const NewContact = (props) => {
  return (
    <div className="form__new">
      <div className="form__header">
        <Link to="/">
          <i className="fa fa-arrow-left"></i>
        </Link>
        <h1 className="form__title">New Contact</h1>
      </div>
      <div className="form__avatar">
        <img src={noAvatarImage} alt=""/>
      </div>
      <div className="form__infos">
        {labels.map((e) => (
          <Input text={e} />
        ))}
      </div>
      <button className="form__button" onClick={() => props.handleSubmit()}>
        New Contact
      </button>
    </div>
  );
};

export default NewContact;

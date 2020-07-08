import React from "react";
import Container from "../Container";

import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
class Topbar extends React.Component {
  render() {
    return (
      <header className="topbar" data-testid="topbar">
        <Container>
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Logo Instagram" />
          </a>
          <Link to="/newcontact">
            New Contact
            <i className="fas fa-plus" />
          </Link>
        </Container>
      </header>
    );
  }
}

export default Topbar;

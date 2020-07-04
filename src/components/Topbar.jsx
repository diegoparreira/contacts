import React from "react";
import Container from "./Container";

import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";

class Topbar extends React.Component {
  render() {
    return (
      <header className="topbar" data-testid="topbar">
        <Container>
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Logo Instagram" />
          </a>
        </Container>
      </header>
    );
  }
}

export default Topbar;

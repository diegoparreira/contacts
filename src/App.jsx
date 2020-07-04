import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import orderItens from "./utils/index";
import contacts from "./data/data.json"

import "./App.scss";

// const URL = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";

// async function getData() {
//   const contacts = await fetch(URL);
//   return await contacts.json();
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: true,
      selected: null,
      contacts: contacts,
      contactsToRender: [],
      active: false,
    };
  }

  handleClick = (key) => {
    this.setState({
      selected: key,
      contactsToRender: this.state.contacts.sort((a, b) =>
        orderItens(a, b, key, this.state.orderType)
      ),
      orderType: !this.state.orderType,
    });
    
  };

  handleChange = (e) => {
    this.setState({
      contactsToRender: this.state.contacts.filter(({ name }) => {
        name = name.toLowerCase();
        return name.includes(e.toLowerCase());
      }),
    });
  };

  componentDidMount() {
      this.setState({
        contactsToRender: contacts,
      });
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
          <Filters
            handleClick={this.handleClick}
            handleChange={this.handleChange}
            selected={this.state.selected}
            orderType={this.state.orderType}
          />

        <Contacts data={this.state.contactsToRender} />
      </React.Fragment>
    );
  }
}

export default App;

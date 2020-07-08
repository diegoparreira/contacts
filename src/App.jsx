import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import NewContact from "./containers/NewContact";
import orderItens from "./utils/index";
import contacts from "./data/data.json";

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

  handleSubmit = () => {
    alert("Adicionado com sucesso");
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
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/newcontact">
              <NewContact handleSubmit={this.handleSubmit}/>
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

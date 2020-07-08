import React from "react";
import Topbar from "../../components/Topbar";
import Filters from "../../components/Filters";
import Contacts from "../../components/Contacts";

const Home = () => {
  return (
    <>
      <Topbar displayNewComponent={this.displayNewComponent} />
      <Filters
        handleClick={this.handleClick}
        handleChange={this.handleChange}
        selected={this.state.selected}
        orderType={this.state.orderType}
      />
      <Contacts data={this.state.contactsToRender} />
    </>
  );
};

export default Home;

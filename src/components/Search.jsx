import React from "react";

class Search extends React.Component {

  render() {
    return (
      <div className="filters__search">
        <input
          type="text"
          className="filters__search__input"
          placeholder="Search by name"
          onChange={(e) => this.props.handleChange(e.target.value)}
        />

        <button className="filters__search__icon">
          <i className="fa fa-search" />
        </button>
      </div>
    );
  }
}

export default Search;

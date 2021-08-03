import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Explore Upslash"
            
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>

        <input />
        <button id="search-btn">Search</button>
      </div>
    );
  }
}

export default SearchBar;

import React from "react";
import { handleSearch } from "../actions";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };
  }

  search = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleSearch(searchText));
  };

  // Keeps on updating search text with every click
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    return (
      <div className="search-bar">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Explore Upslash"
            onChange={this.handleChange}
          />
          

            <div class="input-group-append">
              <button
                class="btn btn-dark rounded"
                type="button"
                onClick={this.search}
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default SearchBar;

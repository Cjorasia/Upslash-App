import React from "react";
import SearchBar from "./SearchBar";
import ImageCard from "./ImageCard";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    // Subscription called after dispatch
    store.subscribe(() => {
      console.log("UPDATED");
      console.log("STATE", this.props.store.getState());
      this.forceUpdate(); // Never use this method
    });

    // Dispatch an action
    // store.dispatch(addMovies(data));

    console.log("STATE", this.props.store.getState());
  }

  render() {
    // const { search: result } = this.props.store.getState();
    const { result } = this.props.store.getState().search;

    // for (const property in result) {
    //   console.log(`${property}: ${result[property]}`);
    // }

    // result.map((img,index)=>{
    //   console.log(img)
    // } );
    // console.log(result[1]);

    return (
      <div className="container">
        <div className="jumbotron">
          <div className="search-region">
            <SearchBar dispatch={this.props.store.dispatch} />
          </div>

          <div className="images">
            {(result || []).map((img) => (
              <div className="img-box">
                <ImageCard src={img.urls.thumb} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

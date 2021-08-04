import React from "react";
import SearchBar from "./SearchBar";
import ImageCard from "./ImageCard";

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
      <div className="app">
        <div className="search-region">
          <SearchBar dispatch={this.props.store.dispatch} />
        </div>
        
        <div className="images">
          {(result || []).map(r => console.log("iterated",r))}
        </div>
      </div>
    );
  }
}

export default App;

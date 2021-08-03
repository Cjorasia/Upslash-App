import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class ImageCard extends React.Component {
  render() {
    return (
      <div>
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body"></div>
        </div>
      </div>
    );
  }
}

export default ImageCard;

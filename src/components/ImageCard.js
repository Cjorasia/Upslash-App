import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class ImageCard extends React.Component {
  render() {
      const {src} = this.props;

    return (
      <div>
        <div className="card" style ={{ width: "18 rem"}}>
          <img className="card-img-top" src={src} alt="" style={{width: "250px", height: "250px"}} />
          
        </div>
      </div>
    );
  }
}

export default ImageCard;
